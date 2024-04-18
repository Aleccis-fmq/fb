import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';



import {MatCardModule} from '@angular/material/card';
import { Libro } from '../../_model/libro';
import { libroService } from '../../_service/libro.service';


import { FlexLayoutModule } from '@angular/flex-layout';
@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [MaterialModule,MatCardModule,FlexLayoutModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent implements OnInit{
 


  //libros

  libros : Libro[];

  constructor(
    private libroService : libroService,
  ){

  }

  ngOnInit(): void {
    this.listarInicial();
  }
  


  //funcion listar
  listarInicial(){

    this.libroService.listar().subscribe(data => {
      this.libros = data;
    });

  }
}
