
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/inicio/inicio.componet')
      .then(m => m.InicioComponent)
  }
];