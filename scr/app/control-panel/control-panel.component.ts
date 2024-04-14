import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CrudAdminsComponent } from '../crud-admins/crud-admins.component';
import { CrudArtistsComponent } from '../crud-artists/crud-artists.component';
import { CrudAlbumsComponent } from '../crud-albums/crud-albums.component';
import { CrudReleasesComponent } from '../crud-releases/crud-releases.component';
import { CrudNewsComponent } from '../crud-news/crud-news.component';
import { CrudStoreComponent } from '../crud-store/crud-store.component';
import { CrudTicketsComponent } from '../crud-tickets/crud-tickets.component';

@Component({
  selector: 'app-control-panel',
  standalone: true,
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.css',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CrudAdminsComponent, CrudArtistsComponent, CrudAlbumsComponent, CrudReleasesComponent, CrudNewsComponent, CrudStoreComponent, CrudTicketsComponent]

})
export class ControlPanelComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

}
