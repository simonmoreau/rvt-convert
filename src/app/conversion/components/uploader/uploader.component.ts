import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileUploader } from '../../classes/file-uploader.class';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

  uploader: FileUploader;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.uploader = new FileUploader({}, this.http);
  }

}
