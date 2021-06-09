import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversionComponent } from './pages/conversion/conversion.component';
import { FileDropDirective } from './directives/file-drop.directive';
import { FileSelectDirective } from './directives/file-select.directive';
import { UploaderComponent } from './components/uploader/uploader.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    ConversionComponent,
    FileDropDirective,
    FileSelectDirective,
    UploaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    UploaderComponent
  ]
})
export class ConversionModule { }
