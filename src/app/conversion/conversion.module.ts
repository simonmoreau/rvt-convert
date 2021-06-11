import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversionComponent } from './pages/conversion/conversion.component';
import { FileDropDirective } from './directives/file-drop.directive';
import { FileSelectDirective } from './directives/file-select.directive';
import { UploaderComponent } from './components/uploader/uploader.component';
import { MaterialModule } from '../material.module';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    ConversionComponent,
    FileDropDirective,
    FileSelectDirective,
    UploaderComponent,
    FileUploaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    CoreModule
  ],
  exports:[
    UploaderComponent
  ]
})
export class ConversionModule { }
