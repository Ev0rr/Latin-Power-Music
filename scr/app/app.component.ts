import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { StoreComponent } from "./store/store.component";
import { AlbumsComponent } from "./albums/albums.component";
import { ArtistsComponent } from "./artists/artists.component";
import { ReleasesComponent } from "./releases/releases.component";
import { TicketsComponent } from "./tickets/tickets.component";
import { CartComponent } from "./cart/cart.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, HomeComponent, StoreComponent, AlbumsComponent, ArtistsComponent, ReleasesComponent, TicketsComponent, CartComponent]
})
export class AppComponent {
  title = 'Latin-Power-Music';
  showOptions = false;

  toggleOptions() {
    console.log('toggleOptions called');
    this.showOptions = !this.showOptions;
    console.log('showOptions:', this.showOptions);
  }
}
