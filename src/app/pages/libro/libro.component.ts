import { Component, ViewChild } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MatTableDataSource } from '@angular/material/table';
import { Libro } from '../../_model/libro';
import {  libroService } from '../../_service/libro.service';
import { MatDialog } from '@angular/material/dialog';
import { LibroDialogoComponent } from './libro-dialogo/libro-dialogo.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-libro',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.css'
})
export class LibroComponent {

  //displayed columnas
  displayedColumns = ['idLibro' , 'titulo' , 'autor' , 'codigo' , 'acciones'];
  dataSource : MatTableDataSource<Libro>;


  //sort
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private libroService : libroService,
    //dialogo
    private dialog : MatDialog,
    //snack
    private snackBar : MatSnackBar

  ) { }


  //se inicia primero
  ngOnInit(): void {
    this.libroService.listar().subscribe(data => {
      this.crearTabla(data);
    });

    //funciones de registrar o modificar
    this.libroService.getLibroCambio().subscribe(data => {
      this.crearTabla(data);
    });

    //
    this.libroService.getMensajeCambio().subscribe(data => {
      this.snackBar.open(data,'INFO' , {duration:2000});
    });
  }

  //busqueda
  filtrar(e : any){
    this.dataSource.filter = e.target.value.trim().toLowerCase();
  }

  abrirDialogo(medico? : Libro){
    this.dialog.open(LibroDialogoComponent, {
      width : '300px',
      data : medico
    });
  }


  //eliminar
  eliminar(medico: Libro){
    this.libroService.eliminar(medico.idLibro).pipe(switchMap(() => {
      return this.libroService.listar();
    }))
      .subscribe(data => {
        this.libroService.setLibroCambio(data);
        this.libroService.setMensajeCambio('SE ELIMINO');
      });
  }


  //crear una tabla
  crearTabla(data: Libro[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


}
