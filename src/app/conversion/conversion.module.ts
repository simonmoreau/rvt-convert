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
import { ConversionSetupComponent } from './components/conversion-setup/conversion-setup.component';
import { FormsModule } from '@angular/forms';
import { ConversionSetupDwgComponent } from './components/conversion-setup-dwg/conversion-setup-dwg.component';
import { ConversionSetupIfcComponent } from './components/conversion-setup-ifc/conversion-setup-ifc.component';
import { ConversionViewListComponent } from './components/conversion-view-list/conversion-view-list.component';
import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';


@NgModule({
  declarations: [
    ConversionComponent,
    FileDropDirective,
    FileSelectDirective,
    UploaderComponent,
    FileUploaderComponent,
    ConversionSetupComponent,
    ConversionSetupDwgComponent,
    ConversionSetupIfcComponent,
    ConversionViewListComponent,
    EnumToArrayPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    CoreModule,
    FormsModule
  ],
  exports:[
    UploaderComponent
  ]
})
export class ConversionModule { }
