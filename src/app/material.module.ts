import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table'  
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule
  ]
})
export class MaterialModule { }
