import { Injectable } from '@angular/core';
import { Libro } from '../_model/libro';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class libroService {

  //creacion de url
  //triple operador
  //private url: string = `$environment.HOST/pacientes`;
  //private url: string = 'environment.HOST/pacientes';
  private url: string = 'http://localhost:8080/libros'

  //variable SUBJECT rxjs
  //actualizacion de reaccion
  //creacion de objeto para libro
  private libroCambio = new Subject<Libro[]>();

  //mensaje de success
  private mensajeCambio = new Subject<string>();

 constructor(private http: HttpClient){

 }


 //GET && SET PRIVATE 
 //Actualizar
 getLibroCambio(){
  return this.libroCambio.asObservable();
 }

 setLibroCambio(libros: Libro[]){
  this.libroCambio.next(libros);
 }

 //Mensaje success
 getMensajeCambio(){
  return this.mensajeCambio.asObservable();
 }

 setMensajeCambio(mensaje : string){
  this.mensajeCambio.next(mensaje)
 }

 //metodo lista gett
 listar(){
  return this.http.get<Libro[]>(this.url);
 }
 

 //metodo listar x id
 listarPorId(id : number){
  return this.http.get<Libro>(`${this.url}/${id}`);
 }

 //registrar 
 registrar(libro : Libro){
  return this.http.post(this.url,libro);
 }

 //modificar
 modificar(paciente : Libro){
  return this.http.put(this.url,paciente);
 }

 //eliminar
 eliminar(id: number){
  return this.http.delete(`${this.url}/${id}`);
 }
}
