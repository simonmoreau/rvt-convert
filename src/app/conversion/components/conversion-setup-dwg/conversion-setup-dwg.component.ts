import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversion-setup-dwg',
  templateUrl: './conversion-setup-dwg.component.html',
  styleUrls: ['./conversion-setup-dwg.component.scss']
})
export class ConversionSetupDwgComponent implements OnInit {

  panelOpenState = false;
  export: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
