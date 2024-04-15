import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReleaseService {
  private apiUrl = 'http://localhost:3000/crud-releases';

  constructor(private http: HttpClient) { }
  insertRelease(releaseData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, releaseData).pipe(
      catchError(error => throwError('Error al agregar lanzamiento: ' + error.message))
    );
  }

  // Método para obtener todos los lanzamientos
  getReleases() {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(error => throwError('Error al obtener lanzamientos: ' + error.message))
    );
  }

  // Método para agregar un nuevo Lanzamiento
  addRelease(release: any): Observable<any> {
    window.location.reload();
    return this.http.post<any>(`${this.apiUrl}`, release);
  }

  // Método para actualizar un lanzamiento existente
  updateRelease(release: any) {
    window.location.reload();
    return this.http.put(`${this.apiUrl}/${release.id_release}`, release).pipe(
      catchError(error => throwError('Error al actualizar lanzamiento: ' + error.message))
    );
  }

  // Método para eliminar un lanzamiento
  deleteRelease(id: number) {
    window.location.reload();
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(error => throwError('Error al eliminar lanzamiento: ' + error.message))
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
