import { Routes } from '@angular/router';
import { AdopcionComponent } from './components/dashboard/adopcion/adopcion.component';
import { PanelComponent } from './components/dashboard/panel/panel.component';
import { HomeComponent } from './components/dashboard/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'panel', component: PanelComponent },
  { path: 'adopcion', component: AdopcionComponent },
];
