import { Routes } from '@angular/router';



import { LibroComponent,  } from './pages/libro/libro.component';

import { ReservaComponent } from './pages/reserva/reserva.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';

export const routes: Routes = [
    {path: 'pages/libro', component: LibroComponent},
    {path: 'pages/reserva', component: ReservaComponent},
    {path: 'pages/galeria', component: GaleriaComponent}
];
