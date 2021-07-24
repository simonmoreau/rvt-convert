import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversion-setup-pdf',
  templateUrl: './conversion-setup-pdf.component.html',
  styleUrls: ['./conversion-setup-pdf.component.scss']
})
export class ConversionSetupPdfComponent implements OnInit {

  export: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
