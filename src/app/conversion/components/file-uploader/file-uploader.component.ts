import { Component, Input, OnInit } from '@angular/core';
import { FileItem } from '../../classes/file-item.class';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {

  @Input() public item: FileItem;

  constructor() { }

  ngOnInit(): void {
  }

}
