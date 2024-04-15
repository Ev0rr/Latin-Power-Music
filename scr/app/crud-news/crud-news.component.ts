import { Component } from '@angular/core';
import { NewService } from '../services/new.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crud-news',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './crud-news.component.html',
  styleUrl: './crud-news.component.css',
  providers: [NewService]
})
export class CrudNewsComponent {
  showForm: boolean = false;
  editing: boolean = false;
  noticias: any[] = [];
  noticia: any = {};

  constructor(private newService: NewService, private http: HttpClient) { }

  ngOnInit() {
    this.getNews();
  }

  showAddForm() {
    this.showForm = true;
    this.editing = false;
    this.noticia = {}; // Reinicializa el objeto new
  }

  cancelForm() {
    this.showForm = false;
  }

  submitForm() {
    if (this.editing) {
      this.newService.updateNew(this.noticia).subscribe(
        () => {
          console.log('Noticia actualizado correctamente');
          // Actualizar la lista de noticias después de actualizar uno existente
          this.getNews();
        },
        (error) => {
          console.error('Error al actualizar noticias:', error);
        }
      );
    } else {
      this.newService.addNew(this.noticia).subscribe(
        () => {
          console.log('Noticia agregado correctamente');
          // Actualizar la lista de Noticias después de agregar uno nuevo
          this.getNews();
        },
        (error) => {
          console.error('Error al agregar noticia:', error);
        }
      );
    }
  }

  getNews() {
    this.newService.getNews().subscribe(
      (noticias) => {
        this.noticias = noticias;
        console.log('Datos de noticias recuperados correctamente:', noticias);
      },
      (error) => {
        console.error('Error al obtener noticias:', error);
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

      // Set the imagen property of the new object to the base64 data
      this.noticia.imagen = base64Data.split(',')[1];
    };

    // Read the image file as a data URL
    reader.readAsDataURL(file);
  }

  editNew(noticia: any) {
    this.showForm = true;
    this.editing = true;
    this.noticia = { ...noticia };
  }

  deleteNew(noticia: any) {
    if (confirm('¿Estás seguro de que quieres eliminar esta noticia?')) {
      this.newService.deleteNew(noticia.id_noticia).subscribe(
        () => {
          console.log('Noticia eliminada correctamente');
          this.getNews();
        },
        (error) => {
          console.error('Error al eliminar noticia:', error);
        }
      );
    }
  }
}
