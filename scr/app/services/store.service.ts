import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private apiUrl = 'http://localhost:3000/crud-store';
  constructor(private http: HttpClient) { }

  insertProduct(productData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, productData).pipe(
      catchError(error => throwError('Error al agregar producto: ' + error.message))
    );
  }

  // Método para obtener todos los productos
  getProducts() {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(error => throwError('Error al obtener productos: ' + error.message))
    );
  }

  // Método para agregar un nuevo producto
  addProduct(product: any): Observable<any> {
    window.location.reload();
    return this.http.post<any>(`${this.apiUrl}`, product);
  }

  // Método para actualizar un producto existente
  updateProduct(product: any) {
    window.location.reload();
    return this.http.put(`${this.apiUrl}/${product.id_tienda}`, product).pipe(
      catchError(error => throwError('Error al actualizar producto: ' + error.message))
    );
  }

  // Método para eliminar un producto
  deleteProduct(id: number) {
    window.location.reload();
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(error => throwError('Error al eliminar producto: ' + error.message))
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
