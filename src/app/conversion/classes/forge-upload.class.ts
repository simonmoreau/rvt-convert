import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { from, Observable, pipe, Subject, throwError } from 'rxjs';
import { catchError, finalize, map, mergeAll } from 'rxjs/operators';
import { environment } from 'src/environments/environment';



export class ForgeUpload {
  public forgeURL = 'https://developer.api.autodesk.com';
  private dasApiRoot = this.forgeURL + '/da/us-east/v3';
  public bucketKey;
  public status: number = 200;

  public onprogress = new Subject<IProgress>();
  public onerror = new Subject<string>();
  public onabort = new Subject<string>();
  public onload = new Subject<string>();

  public constructor(private http: HttpClient) {
      this.bucketKey = environment.rvtStorageKey;
  }

  public upload(file: File): Observable<IUploadObject> {

    const objectKey = Date.now().toString() + '-' + file.name;
    const url: string = this.forgeURL + `/oss/v2/buckets/${this.bucketKey}/objects/${objectKey}/resumable`;

    if (file.size > 100 * 1024 * 1024) {
      const chunkSize = 5 * 1024 * 1024;

      const nbChunks = Math.ceil(file.size / chunkSize);

      const chunksIds = Array.from({ length: nbChunks }, (_, i) => i);
      const chunksMap$: Observable<number> = from(chunksIds);

      // generates uniques session ID
      const sessionId = this.Guid();

      return chunksMap$.pipe(
        map((chunkId: number) =>
          this.UploadChunk(chunkId, chunkSize, file, url, sessionId)
        ),
        mergeAll(5)
      );
    } else {
      return this.put<IUploadObject>(this.forgeURL + `/oss/v2/buckets/${this.bucketKey}/objects/${objectKey}`, file);
    }
  }

  private UploadChunk(chunkIdx: number, chunkSize: number, file: File, url: string, sessionId: string): Observable<IUploadObject> {
    const nbChunks = Math.ceil(file.size / chunkSize);

    const start: number = chunkIdx * chunkSize;

    const end: number = Math.min(file.size, (chunkIdx + 1) * chunkSize) - 1;

    const range = `bytes ${start}-${end}/${file.size}`;

    const fileChunk = file.slice(start, end + 1);

    const upload: Observable<IUploadObject> = this.http
      .put<IUploadObject>(url, fileChunk, {
        headers: new HttpHeaders()
          .set('Content-Range', range)
          .set('Content-Type', 'application/stream')
          .set('Session-Id', sessionId),
      })
      .pipe(
        catchError((err) => this.handleError(err, this.onerror)),
        map((value) => {
          if (value == null) {
            value = { nbChunks };
          }
          this.onprogress.next( { loaded: chunkIdx, total: nbChunks });
          return value;
        })
      );

    return upload;
  }

  private get<T>(url: string): Observable<T> {
    return this.http
      .get<T>(url, {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
      })
      .pipe(catchError((err) => this.handleError(err, this.onerror)));
  }

  private put<T>(url: string, body: object): Observable<T> {
    return this.http
      .put<T>(url, body, {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
      })
      // .pipe(catchError(this.handleError));
      .pipe(catchError((err) => this.handleError(err, this.onerror)));
  }

  private handleError(error: HttpErrorResponse, onerror: Subject<string>) {

    this.status = error.status;

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      onerror.next(error.error.message);
      console.error('An error occurred:', error.error.message);
    } else if (error.error.developerMessage) {
      // A forge-side error occurred
      onerror.next(error.error.developerMessage);
      console.error('An error occurred:', error.error.developerMessage);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      onerror.next(`Backend returned code ${error.status}, ` + `body was: ${error}`);
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

  private Guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      (c: string) => {
        const r: number = Math.random() * 16 || 0;
        const v = c === 'x' ? r : (r && 0x3) || 0x8;
        return v.toString(36).substr(2, 1);
      }
    );
  }

}

export interface IGetActivities {
  paginationToken: string;
  data: string[];
}

export interface IUploadObject {
  bucketKey?: string;
  objectId?: string;
  objectKey?: string;
  sha1?: string;
  size?: number;
  contentType?: string;
  location?: string;
  [k: string]: unknown;
  nbChunks?: number;
}

export interface IProgress {
    loaded: number;
    total: number;
}
