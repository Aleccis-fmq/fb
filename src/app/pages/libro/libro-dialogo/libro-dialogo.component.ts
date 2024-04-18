import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { Libro } from '../../../_model/libro';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { libroService } from '../../../_service/libro.service';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-libro-dialogo',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './libro-dialogo.component.html',
  styleUrl: './libro-dialogo.component.css'
})
export class LibroDialogoComponent {

  libro : Libro;

  constructor(
    private dialogRef: MatDialogRef<LibroDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) private data : Libro,
    private libroService : libroService
    ) {
    
  }

  ngOnInit(){
    this.libro = {...this.data};
  }

  operar(){
    if (this.libro != null && this.libro.idLibro > 0) {
      //MODIFICAR
      this.libroService.modificar(this.libro).pipe(switchMap( ()=> {
        return this.libroService.listar();
      }))
      .subscribe(data => {
        this.libroService.setLibroCambio(data);
        this.libroService.setMensajeCambio('SE MODIFICO');
      });
    }else{
      //REGISTRAR
      this.libroService.registrar(this.libro).pipe(switchMap( ()=> {
        return this.libroService.listar();
      }))      
      .subscribe(data => {
        this.libroService.setLibroCambio(data);
        this.libroService.setMensajeCambio('SE REGISTRO');
      });
    }
    this.cerrar();
  }

  cerrar(){
    this.dialogRef.close();
  }
}
