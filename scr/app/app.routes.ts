import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtistsComponent } from './artists/artists.component';
import { AlbumsComponent } from './albums/albums.component';
import { ReleasesComponent } from './releases/releases.component';
import { NewsComponent } from './news/news.component';
import { StoreComponent } from './store/store.component';
import { TicketsComponent } from './tickets/tickets.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'artists', component: ArtistsComponent },
    { path: 'albums', component: AlbumsComponent },
    { path: 'releases', component: ReleasesComponent },
    { path: 'news', component: NewsComponent },
    { path: 'store', component: StoreComponent },
    { path: 'tickets', component: TicketsComponent },
    { path: 'cart', component: CartComponent },
    { path: 'login', component: LoginComponent},
    { path: 'control-panel', component: ControlPanelComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
];
