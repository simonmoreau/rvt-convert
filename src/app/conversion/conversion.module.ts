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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConversionSetupDwgComponent } from './components/conversion-setup-dwg/conversion-setup-dwg.component';
import { ConversionSetupIfcComponent } from './components/conversion-setup-ifc/conversion-setup-ifc.component';
import { ConversionViewListComponent } from './components/conversion-view-list/conversion-view-list.component';
import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';
import { ConversionSetupLayerTableComponent } from './components/conversion-setup-layer-table/conversion-setup-layer-table.component';
import { ConversionSetupPdfComponent } from './components/conversion-setup-pdf/conversion-setup-pdf.component';
import { ConversionSetupPatternTableComponent } from './components/conversion-setup-pattern-table/conversion-setup-pattern-table.component';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';


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
    EnumToArrayPipe,
    ConversionSetupLayerTableComponent,
    ConversionSetupPdfComponent,
    ConversionSetupPatternTableComponent
  ],
  providers: [
    { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }
   ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatColorPickerModule
  ],
  exports:[
    UploaderComponent,
  ]
})
export class ConversionModule { }
