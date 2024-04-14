import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false; // Variable para rastrear el estado de la autenticación

  constructor() { }

  // Método para iniciar sesión y establecer el estado de autenticación como verdadero
  login(): void {
    this.isLoggedIn = true;
  }

  // Método para cerrar sesión y establecer el estado de autenticación como falso
  logout(): void {
    localStorage.removeItem('token'); // También eliminamos el token del localStorage
    this.isLoggedIn = false;
    console.log('Token eliminado y estado de autenticación establecido en falso');
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    // Verifica si localStorage está disponible antes de usarlo
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('token');
      console.log('Token:', token);
      // Si el token es null o undefined, retorna falso
      if (!token) {
        return false;
      }
      // Si el token está presente, retorna true
      return true;
    } else {
      // Si localStorage no está disponible, asume que el usuario no está autenticado
      return false;
    }
  }
}