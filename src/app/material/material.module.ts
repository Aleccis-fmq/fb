import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

//
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';

import { MatSortModule } from '@angular/material/sort';
import { RouterLink, RouterOutlet } from '@angular/router';

//ngmodule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//snackbar
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatPaginatorImpl } from './mat-paginator';

//medico
import {MatDialogModule} from '@angular/material/dialog';


//paginador

//import { MatPaginatorImpl } from './mat-paginator';

//SELECT
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [],
  imports: [
    RouterLink,RouterOutlet
  ],


  //usar al exterior
  exports:[
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,

    //

    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatSortModule,
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    RouterLink,
    RouterOutlet,
    ReactiveFormsModule,
    //
    MatDialogModule,
    //
    MatSelectModule
  ],
  providers: [
    {provide: MatPaginatorIntl, useClass: MatPaginatorImpl}
  ]
})
export class MaterialModule { }
