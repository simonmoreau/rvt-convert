import { Component, OnInit } from '@angular/core';
import { FileUploader } from '../../classes/file-uploader.class';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

  uploader: FileUploader;
  
  constructor() { }

  ngOnInit(): void {
    this.uploader = new FileUploader({});
  }

}
