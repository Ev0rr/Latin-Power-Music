import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private apiUrl = 'http://localhost:3000/crud-artists';

  constructor(private http: HttpClient) { }

  insertArtist(artistData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, artistData).pipe(
      catchError(error => throwError('Error al agregar artista: ' + error.message))
    );
  }

  // Método para obtener todos los artistas
  getArtists() {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(error => throwError('Error al obtener artistas: ' + error.message))
    );
  }

  // Método para agregar un nuevo artista
  addArtist(artist: any): Observable<any> {
    window.location.reload();
    return this.http.post<any>(`${this.apiUrl}`, artist);
  }

  // Método para actualizar un artista existente
  updateArtist(artist: any) {
    window.location.reload();
    return this.http.put(`${this.apiUrl}/${artist.id_artista}`, artist).pipe(
      catchError(error => throwError('Error al actualizar artista: ' + error.message))
    );
  }

  // Método para eliminar un artista
  deleteArtist(id: number) {
    window.location.reload();
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(error => throwError('Error al eliminar artista: ' + error.message))
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
