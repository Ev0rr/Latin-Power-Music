import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:3000/crud-admins';

  constructor(private http: HttpClient) { }

  insertAdmin(adminData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, adminData).pipe(
      catchError(error => throwError('Error al agregar administrador: ' + error.message))
    );
  }

  // Método para obtener todos los administradores
  getAdmins() {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(error => throwError('Error al obtener administradores: ' + error.message))
    );
  }

  // Método para agregar un nuevo administrador
  addAdmin(admin: any): Observable<any> {
    window.location.reload();
    return this.http.post<any>(`${this.apiUrl}`, admin);
  }

  // Método para actualizar un administrador existente
  updateAdmin(admin: any) {
    window.location.reload();
    return this.http.put(`${this.apiUrl}/${admin.id_administrador}`, admin).pipe(
      catchError(error => throwError('Error al actualizar administrador: ' + error.message))
    );
  }

  // Método para eliminar un administrador
  deleteAdmin(id: number) {
    window.location.reload();
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(error => throwError('Error al eliminar administrador: ' + error.message))
    );
  }

  // Método para subir una imagen
  uploadImage(file: File) {
    window.location.reload();
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post('/api/upload', formData).pipe(
      catchError(error => throwError('Error al subir imagen: ' + error.message))
    );
  }
}
