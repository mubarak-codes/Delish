import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FavoritesComponent} from "./pages/favorites/favorites.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FavoritesComponent],
  template: `
    <app-navbar />
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'Delish';
}
