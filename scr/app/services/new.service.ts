import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewService {
  private apiUrl = 'http://localhost:3000/crud-news';

  constructor(private http: HttpClient) { }

  insertNew(noticiaData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, noticiaData).pipe(
      catchError(error => throwError('Error al agregar noticia: ' + error.message))
    );
  }

  // Método para obtener todas las noticias
  getNews() {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(error => throwError('Error al obtener noticias: ' + error.message))
    );
  }

  // Método para agregar una nueva noticia
  addNew(noticia: any): Observable<any> {
    window.location.reload();
    return this.http.post<any>(`${this.apiUrl}`, noticia);
  }

  // Método para actualizar una noticia existente
  updateNew(noticia: any) {
    window.location.reload();
    return this.http.put(`${this.apiUrl}/${noticia.id_noticia}`, noticia).pipe(
      catchError(error => throwError('Error al actualizar noticia: ' + error.message))
    );
  }

  // Método para eliminar una noticia
  deleteNew(id: number) {
    window.location.reload();
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(error => throwError('Error al eliminar noticia: ' + error.message))
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
