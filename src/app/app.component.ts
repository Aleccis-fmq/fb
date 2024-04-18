import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LibroComponent } from './pages/libro/libro.component';

//ROUTER LINKS
import { RouterModule } from '@angular/router';

//carpeta de angular material
import {MaterialModule} from './material/material.module'

//
import {FormsModule} from '@angular/forms';


//
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    RouterOutlet,
    LibroComponent,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterOutlet
     
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'media-front';
}
