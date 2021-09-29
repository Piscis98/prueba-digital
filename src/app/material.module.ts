import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatTableModule} from '@angular/material/table'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatButtonModule} from '@angular/material/button'; 

const myModule: any[] = [

  MatTabsModule,
  MatIconModule,
  MatTooltipModule,
  MatGridListModule,
  MatTableModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatCardModule,
  MatDialogModule,
  MatButtonModule

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    myModule
  ],
  exports:[myModule]
})
export class MaterialModule { }
