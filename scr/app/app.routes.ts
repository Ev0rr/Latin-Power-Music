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
import { permissionsGuard } from './guards/permissions.guard';
import { CrudAdminsComponent } from './crud-admins/crud-admins.component';
import { CrudArtistsComponent } from './crud-artists/crud-artists.component';
import { CrudAlbumsComponent } from './crud-albums/crud-albums.component';
import { CrudReleasesComponent } from './crud-releases/crud-releases.component';
import { CrudNewsComponent } from './crud-news/crud-news.component';
import { CrudStoreComponent } from './crud-store/crud-store.component';
import { CrudTicketsComponent } from './crud-tickets/crud-tickets.component';

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
    { path: 'control-panel', component: ControlPanelComponent, canActivate: [permissionsGuard]},
    { path: 'crud-admins', component: CrudAdminsComponent, canActivate: [permissionsGuard]},
    { path: 'crud-artists', component: CrudArtistsComponent, canActivate: [permissionsGuard]},
    { path: 'crud-albums', component: CrudAlbumsComponent, canActivate: [permissionsGuard]},
    { path: 'crud-releases', component: CrudReleasesComponent, canActivate: [permissionsGuard]},
    { path: 'crud-news', component: CrudNewsComponent, canActivate: [permissionsGuard]},
    { path: 'crud-store', component: CrudStoreComponent, canActivate: [permissionsGuard]},
    { path: 'crud-tickets', component: CrudTicketsComponent, canActivate: [permissionsGuard]},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
];
