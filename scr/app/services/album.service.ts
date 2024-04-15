import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private apiUrl = 'http://localhost:3000/crud-albums';

  constructor(private http: HttpClient) { }
  insertAlbum(albumData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, albumData).pipe(
      catchError(error => throwError('Error al agregar álbum: ' + error.message))
    );
  }

  // Método para obtener todos los albums
  getAlbums() {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(error => throwError('Error al obtener álbumes: ' + error.message))
    );
  }

  // Método para agregar un nuevo album
  addAlbum(album: any): Observable<any> {
    window.location.reload();
    return this.http.post<any>(`${this.apiUrl}`, album);
  }

  // Método para actualizar un album existente
  updateAlbum(album: any) {
    window.location.reload();
    return this.http.put(`${this.apiUrl}/${album.id_album}`, album).pipe(
      catchError(error => throwError('Error al actualizar album: ' + error.message))
    );
  }

  // Método para eliminar un album
  deleteAlbum(id: number) {
    window.location.reload();
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(error => throwError('Error al eliminar álbum: ' + error.message))
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

