import { BehaviorSubject, Observable, Subject } from 'rxjs';

function isElement(node: any): boolean {
  return !!(node && (node.nodeName || (node.prop && node.attr && node.find)));
}

export class FileLikeObject {
  public lastModifiedDate: any;
  public size: any;
  public type: string;
  public name: string;
  public extension: string;
  public rawFile: string;
  public $version: Observable<string>;

  public constructor(fileOrInput: any) {
    this.rawFile = fileOrInput;
    let isInput = isElement(fileOrInput);
    let fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
    let postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
    let method = '_createFrom' + postfix;
    (this as any)[method](fakePathOrObject);

    const chunks = this.name.split('.');
    if (chunks.length < 2) {
      this.extension = '';
    }
    else
    {
      this.extension = chunks[ chunks.length - 1 ].toLowerCase();
    }
  }

  public _createFromFakePath(path: string): void {
    this.lastModifiedDate = void 0;
    this.size = void 0;
    this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
    this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
  }

  public _createFromObject(object: {
    size: number;
    type: string;
    name: string;
  }): void {
    this.size = object.size;
    this.type = object.type;
    this.name = object.name;

    this.$version = this.getRevitVersion(object as File);
  }

  private getRevitVersion(file: File): Observable<string> {

    const versionSubject: Subject<string> = new Subject<string>();
    const versionObservable: Observable<string> = versionSubject.asObservable();

    if (!file) {
      versionSubject.error('The file does not exist.')
      return;
    }

    const opt: IParseFileOption = {
      chunk_size: 64 * 1024,
      binary: true,
      error_callback: (result: string | ArrayBuffer) => {
        console.log(result);
        versionSubject.error('Could not find the Revit version');
      },
      chunk_read_callback: (result: string | ArrayBuffer) => {
        const version = this.FindRevitVersionInText(result);
        if (version !== null) {
          versionSubject.next(version);
        }
      },
    };

    this.parseFile(file, opt);

    return versionObservable;
  }

  /*
 * Valid options are:
 * - chunk_read_callback: a function that accepts the read chunk
                          as its only argument. If binary option
                          is set to true, this function will receive
                          an instance of ArrayBuffer, otherwise a String
 * - error_callback:      an optional function that accepts an object of type
                          FileReader.error
 * - success:             an optional function invoked as soon as the whole file has been
                          read successfully
 * - binary:              If true chunks will be read through FileReader.readAsArrayBuffer
 *                        otherwise as FileReader.readAsText. Default is false.
 * - chunk_size:          The chunk size to be used, in bytes. Default is 64K.
 */
  private parseFile(file: File, options: IParseFileOption) {
    const opts = typeof options === 'undefined' ? {} : options;
    const fileSize = file.size;
    const chunkSize =
      typeof opts['chunk_size'] === 'undefined'
        ? 64 * 1024
        : parseInt(opts['chunk_size']); // bytes
    const binary =
      typeof opts['binary'] === 'undefined' ? false : opts['binary'] === true;
    let offset = 0;
    let readBlock = null;
    const chunkReadCallback =
      typeof opts['chunk_read_callback'] === 'function'
        ? opts['chunk_read_callback']
        : function () {};
    const chunkErrorCallback =
      typeof opts['error_callback'] === 'function'
        ? opts['error_callback']
        : function () {};

    const onLoadHandler = (evt: ProgressEvent<FileReader>) => {
      let stopReading = false;
      if (evt.target.error == null) {
        offset += evt.target.result.toString().length;
        stopReading = chunkReadCallback(evt.target.result);
      } else {
        chunkErrorCallback(evt.target.error);
        return;
      }
      if (offset >= fileSize) {
        return;
      }
      if (!stopReading) {
        readBlock(offset, chunkSize, file);
      }
    };

    readBlock = (offset: number, length: number, file: File) => {
      const r = new FileReader();
      const blob: Blob = file.slice(offset, length + offset);
      r.onload = onLoadHandler;
      if (binary) {
        r.readAsBinaryString(blob);
      } else {
        r.readAsText(blob);
      }
    };

    readBlock(offset, chunkSize, file);
  }

  private FindRevitVersionInText(contents: string | ArrayBuffer): string {
    const line: string = contents.toString().replace(/[^ -~]+/g, '');
    if (line.includes('Format:')) {
      const regex = /Format: (\d+)/g;
      const found = line.match(regex);
      const version = found[0].replace('Format: ', '');
      return version;
    } else if (line.includes('Revit Build: ')) {
      const regex = /Revit Build: Autodesk Revit (\d+)/g;
      const found = line.match(regex);
      let version = null;
      if (found) {
        version = found[0].replace('Revit Build: Autodesk Revit ', '');
      } else {
        if (line.includes('Architecture')) {
          const regex = /Revit Build: Autodesk Revit Architecture (\d+)/g;
          const found = line.match(regex);
          if (found) {
            version = found[0].replace(
              'Revit Build: Autodesk Revit Architecture ',
              ''
            );
          }
        } else if (line.includes('MEP')) {
          const regex = /Revit Build: Autodesk Revit MEP (\d+)/g;
          const found = line.match(regex);
          if (found) {
            version = found[0].replace('Revit Build: Autodesk Revit MEP ', '');
          }
        } else if (line.includes('Structure')) {
          const regex = /Revit Build: Autodesk Revit Structure (\d+)/g;
          const found = line.match(regex);
          if (found) {
            version = found[0].replace(
              'Revit Build: Autodesk Revit Structure ',
              ''
            );
          }
        }
      }

      console.log(version);
      return version;
    } else {
      return null;
    }
  }
}

interface IParseFileOption {
  chunk_size: number;
  binary: boolean;
  chunk_read_callback: (result: string | ArrayBuffer) => void;
  error_callback: (result: string | ArrayBuffer) => void;
}
