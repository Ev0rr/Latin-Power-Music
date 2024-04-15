import { ChangeDetectorRef, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { StoreComponent } from "./store/store.component";
import { AlbumsComponent } from "./albums/albums.component";
import { ArtistsComponent } from "./artists/artists.component";
import { ReleasesComponent } from "./releases/releases.component";
import { TicketsComponent } from "./tickets/tickets.component";
import { CartComponent } from "./cart/cart.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, HomeComponent, StoreComponent, AlbumsComponent, ArtistsComponent, ReleasesComponent, TicketsComponent, CartComponent]
})
export class AppComponent implements OnInit {
  @ViewChild('modal') modal!: ElementRef;

  title = 'Latin-Power-Music';
  showOptions = false;
  isLoggedIn = false;

  toggleOptions() {
    console.log('toggleOptions called');
    this.showOptions = !this.showOptions;
    console.log('showOptions:', this.showOptions);
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object, public authService: AuthService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.authService.isLoggedIn = this.authService.isAuthenticated();
      this.isLoggedIn = this.authService.isLoggedIn;
      this.cdr.detectChanges();
      const modal = document.getElementById("modal");
      const hamburgerButton = document.querySelector(".hamburger-button");
      const navLinks = document.querySelectorAll(".nav-link") as NodeListOf<HTMLElement>;
      const loginLink = document.getElementById("loginLink");
      const logoutLink = document.getElementById("logoutLink");

      // Mostrar el modal cuando se hace clic en el botón de hamburguesa
      if (hamburgerButton instanceof HTMLElement) {
        hamburgerButton.addEventListener("click", () => {
          if (modal) {
            modal.style.display = "block";
          }
        });
      }

      // Ocultar el modal cuando se hace clic en cualquier enlace del navbar
      Array.from(navLinks).forEach((link: HTMLElement) => {
        link.addEventListener("click", () => {
          if (modal) {
            modal.style.display = "none";
          }
        });
      });

      // Ocultar el modal cuando se hace clic en el enlace de "Iniciar Sesión" dentro del modal
      if (loginLink instanceof HTMLElement) {
        loginLink.addEventListener("click", (event) => {
          event.stopPropagation(); // Detener la propagación del evento
          if (modal) {
            modal.style.display = "none";
          }
        });
      }

      // Ocultar el modal cuando se hace clic en el enlace de "Cerrar Sesión" dentro del modal
      if (logoutLink instanceof HTMLElement) {
        logoutLink.addEventListener("click", (event) => {
          event.stopPropagation(); // Detener la propagación del evento
          if (modal) {
            modal.style.display = "none";
          }
        });
      }
    }
  }
  logout() {
    this.authService.logout(); // Llama a la función logout() del servicio AuthService
    window.location.reload();
  }

  handleLoginClick(): void {
    console.log('Iniciando sesión...');
    // Aquí puedes agregar lógica adicional para iniciar sesión si es necesario
    this.isLoggedIn = true;
    
  }

  handleLogoutClick(): void {
    console.log('Cerrando sesión...');
    this.authService.logout();
    this.isLoggedIn = false;
    window.location.reload();
  }
  
}
