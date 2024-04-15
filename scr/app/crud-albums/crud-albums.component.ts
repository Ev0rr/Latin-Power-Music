import { Component } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crud-albums',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './crud-albums.component.html',
  styleUrl: './crud-albums.component.css',
  providers: [AlbumService]
})
export class CrudAlbumsComponent {
  showForm: boolean = false;
  editing: boolean = false;
  albums: any[] = [];
  album: any = {};

  constructor(private albumService: AlbumService, private http: HttpClient) { }

  ngOnInit() {
    this.getAlbums();
  }

  showAddForm() {
    this.showForm = true;
    this.editing = false;
    this.album = {}; // Reinicializa el objeto album
  }

  cancelForm() {
    this.showForm = false;
  }

  submitForm() {
    if (this.editing) {
      this.albumService.updateAlbum(this.album).subscribe(
        () => {
          console.log('Album actualizado correctamente');
          // Actualizar la lista de administradores después de actualizar uno existente
          this.getAlbums();
        },
        (error) => {
          console.error('Error al actualizar album:', error);
        }
      );
    } else {
      this.albumService.addAlbum(this.album).subscribe(
        () => {
          console.log('Album agregado correctamente');
          // Actualizar la lista de álbumes después de agregar uno nuevo
          this.getAlbums();
        },
        (error) => {
          console.error('Error al agregar album:', error);
        }
      );
    }
  }

  getAlbums() {
    this.albumService.getAlbums().subscribe(
      (albums) => {
        this.albums = albums;
        console.log('Datos de álbumes recuperados correctamente:', albums);
      },
      (error) => {
        console.error('Error al obtener álbumes:', error);
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

      // Set the imagen property of the admin object to the base64 data
      this.album.imagen = base64Data.split(',')[1];
    };

    // Read the image file as a data URL
    reader.readAsDataURL(file);
  }

  editAlbum(album: any) {
    this.showForm = true;
    this.editing = true;
    this.album = { ...album };
  }

  deleteAlbum(album: any) {
    if (confirm('¿Estás seguro de que quieres eliminar este álbum?')) {
      this.albumService.deleteAlbum(album.id_album).subscribe(
        () => {
          console.log('Álbum eliminado correctamente');
          this.getAlbums();
        },
        (error) => {
          console.error('Error al eliminar álbum:', error);
        }
      );
    }
  }
}
