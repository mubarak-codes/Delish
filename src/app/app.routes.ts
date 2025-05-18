import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: ()=>{
      return import('./pages/home/home.component')
      .then(m=>m.HomeComponent)
    }
  },
  {
    path: "favorites",
    loadComponent: ()=>{
      return import('./pages/favorites/favorites.component')
      .then(m=>m.FavoritesComponent)
    }
  }
];
