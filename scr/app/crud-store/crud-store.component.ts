import { Component } from '@angular/core';
import { StoreService } from '../services/store.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crud-store',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './crud-store.component.html',
  styleUrl: './crud-store.component.css',
  providers: [StoreService]
})
export class CrudStoreComponent {
  showForm: boolean = false;
  editing: boolean = false;
  products: any[] = [];
  product: any = {};

  constructor(private storeService: StoreService, private http: HttpClient) { }

  ngOnInit() {
    this.getProducts();
  }

  showAddForm() {
    this.showForm = true;
    this.editing = false;
    this.product = {}; // Reinicializa el objeto product
  }

  cancelForm() {
    this.showForm = false;
  }

  submitForm() {
    if (this.editing) {
      this.storeService.updateProduct(this.product).subscribe(
        () => {
          console.log('Tienda actualizada correctamente');
          // Actualizar la lista de la tienda después de actualizar un producto existente
          this.getProducts();
        },
        (error) => {
          console.error('Error al actualizar la tienda:', error);
        }
      );
    } else {
      this.storeService.addProduct(this.product).subscribe(
        () => {
          console.log('Producto agregado correctamente');
          // Actualizar la lista de productos después de agregar uno nuevo
          this.getProducts();
        },
        (error) => {
          console.error('Error al agregar producto:', error);
        }
      );
    }
  }

  getProducts() {
    this.storeService.getProducts().subscribe(
      (products) => {
        this.products = products;
        console.log('Datos de la tienda recuperados correctamente:', products);
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();

    // Define the onload event handler for the FileReader
    reader.onload = (e: any) => {
      // Get the base64 data from the FileReader
      const base64Data = e.target.result;

      // Set the imagen property of the product object to the base64 data
      this.product.imagen = base64Data.split(',')[1];
    };

    // Read the image file as a data URL
    reader.readAsDataURL(file);
  }

  editProduct(product: any) {
    this.showForm = true;
    this.editing = true;
    this.product = { ...product };
  }

  deleteProduct(product: any) {
    if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      this.storeService.deleteProduct(product.id_tienda).subscribe(
        () => {
          console.log('Producto eliminado correctamente');
          this.getProducts();
        },
        (error) => {
          console.error('Error al eliminar producto:', error);
        }
      );
    }
  }
}
