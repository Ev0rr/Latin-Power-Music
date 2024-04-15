import { Component } from '@angular/core';
import { ArtistService } from '../services/artist.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crud-artists',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './crud-artists.component.html',
  styleUrl: './crud-artists.component.css',
  providers: [ArtistService]
})
export class CrudArtistsComponent {
  showForm: boolean = false;
  editing: boolean = false;
  artists: any[] = [];
  artist: any = {};

  constructor(private artistService: ArtistService, private http: HttpClient) { }

  ngOnInit() {
    this.getArtists();
  }

  showAddForm() {
    this.showForm = true;
    this.editing = false;
    this.artist = {}; // Reinicializa el objeto artist
  }

  cancelForm() {
    this.showForm = false;
  }

  submitForm() {
    if (this.editing) {
      this.artistService.updateArtist(this.artist).subscribe(
        () => {
          console.log('Artista actualizado correctamente');
          // Actualizar la lista de artista después de actualizar uno existente
          this.getArtists();
        },
        (error) => {
          console.error('Error al actualizar artista:', error);
        }
      );
    } else {
      this.artistService.addArtist(this.artist).subscribe(
        () => {
          console.log('Artista agregado correctamente');
          // Actualizar la lista de artistas después de agregar uno nuevo
          this.getArtists();
        },
        (error) => {
          console.error('Error al agregar artista:', error);
        }
      );
    }
  }

  getArtists() {
    this.artistService.getArtists().subscribe(
      (artists) => {
        this.artists = artists;
        console.log('Datos de artistas recuperados correctamente:', artists);
      },
      (error) => {
        console.error('Error al obtener artistas:', error);
      }
    );
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const base64Data = e.target.result;
      this.artist.imagen = base64Data.split(',')[1];
    };

    // Read the image file as a data URL
    reader.readAsDataURL(file);
  }

  editArtist(artist: any) {
    this.showForm = true;
    this.editing = true;
    this.artist = { ...artist };
  }

  deleteArtist(artist: any) {
    if (confirm('¿Estás seguro de que quieres eliminar este artista?')) {
      this.artistService.deleteArtist(artist.id_artista).subscribe(
        () => {
          console.log('Artista eliminado correctamente');
          this.getArtists();
        },
        (error) => {
          console.error('Error al eliminar artista:', error);
        }
      );
    }
  }
}
