import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: ()=>{
      return import('./pages/home/home.component')
      .then(m=>m.HomeComponent)
    }
  }
];
