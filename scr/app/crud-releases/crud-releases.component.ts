import { Component } from '@angular/core';
import { ReleaseService } from '../services/release.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crud-releases',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './crud-releases.component.html',
  styleUrl: './crud-releases.component.css',
  providers: [ReleaseService]
})
export class CrudReleasesComponent {
  showForm: boolean = false;
  editing: boolean = false;
  releases: any[] = [];
  release: any = {};

  constructor(private releaseService: ReleaseService, private http: HttpClient) { }

  ngOnInit() {
    this.getReleases();
  }

  showAddForm() {
    this.showForm = true;
    this.editing = false;
    this.release = {}; // Reinicializa el objeto release
  }

  cancelForm() {
    this.showForm = false;
  }

  submitForm() {
    if (this.editing) {
      this.releaseService.updateRelease(this.release).subscribe(
        () => {
          console.log('Lanzamiento actualizado correctamente');
          // Actualizar la lista de lanzamientos después de actualizar uno existente
          this.getReleases();
        },
        (error) => {
          console.error('Error al actualizar lanzamiento:', error);
        }
      );
    } else {
      this.releaseService.addRelease(this.release).subscribe(
        () => {
          console.log('Lanzamiento agregado correctamente');
          // Actualizar la lista de lanzamientos después de agregar uno nuevo
          this.getReleases();
        },
        (error) => {
          console.error('Error al agregar lanzamiento:', error);
        }
      );
    }
  }

  getReleases() {
    this.releaseService.getReleases().subscribe(
      (releases) => {
        this.releases = releases;
        console.log('Datos de lanzamientos recuperados correctamente:', releases);
      },
      (error) => {
        console.error('Error al obtener lanzamientos:', error);
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

      // Set the imagen property of the release object to the base64 data
      this.release.imagen = base64Data.split(',')[1];
    };

    // Read the image file as a data URL
    reader.readAsDataURL(file);
  }

  editRelease(release: any) {
    this.showForm = true;
    this.editing = true;
    this.release = { ...release };
  }

  deleteRelease(release: any) {
    if (confirm('¿Estás seguro de que quieres eliminar este lanzamiento?')) {
      this.releaseService.deleteRelease(release.id_release).subscribe(
        () => {
          console.log('Lanzamiento eliminado correctamente');
          this.getReleases();
        },
        (error) => {
          console.error('Error al eliminar lanzamiento:', error);
        }
      );
    }
  }
}
