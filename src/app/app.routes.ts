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
  },
  {
    path: "add-recipe",
    loadComponent: ()=>{
      return import('./pages/add/add.component')
      .then(m=>m.AddComponent)
    }
  },
  {
    path: "about",
    loadComponent: ()=>{
      return import('./pages/about/about.component')
      .then(m=>m.AboutComponent)
    }
  },
  {
    path: "help",
    loadComponent: ()=>{
      return import('./pages/help/help.component')
      .then(m=>m.HelpComponent)
    }
  }
];
