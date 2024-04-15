import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crud-admins',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './crud-admins.component.html',
  styleUrl: './crud-admins.component.css',
  providers: [AdminService]
})
export class CrudAdminsComponent {
  showForm: boolean = false;
  editing: boolean = false;
  admins: any[] = [];
  admin: any = {};

  constructor(private adminService: AdminService, private http: HttpClient) { }

  ngOnInit() {
    this.getAdmins();
  }

  showAddForm() {
    this.showForm = true;
    this.editing = false;
    this.admin = {}; // Reinicializa el objeto admin
  }

  cancelForm() {
    this.showForm = false;
  }

  submitForm() {
    if (this.editing) {
      this.adminService.updateAdmin(this.admin).subscribe(
        () => {
          console.log('Administrador actualizado correctamente');
          // Actualizar la lista de administradores después de actualizar uno existente
          this.getAdmins();
        },
        (error) => {
          console.error('Error al actualizar administrador:', error);
        }
      );
    } else {
      this.adminService.addAdmin(this.admin).subscribe(
        () => {
          console.log('Administrador agregado correctamente');
          // Actualizar la lista de administradores después de agregar uno nuevo
          this.getAdmins();
        },
        (error) => {
          console.error('Error al agregar administrador:', error);
        }
      );
    }
  }

  getAdmins() {
    this.adminService.getAdmins().subscribe(
      (admins) => {
        this.admins = admins;
        console.log('Datos de administradores recuperados correctamente:', admins);
      },
      (error) => {
        console.error('Error al obtener administradores:', error);
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
      this.admin.imagen = base64Data.split(',')[1];
    };

    // Read the image file as a data URL
    reader.readAsDataURL(file);
  }

  editAdmin(admin: any) {
    this.showForm = true;
    this.editing = true;
    this.admin = { ...admin };
  }

  deleteAdmin(admin: any) {
    if (confirm('¿Estás seguro de que quieres eliminar este administrador?')) {
      this.adminService.deleteAdmin(admin.id_administrador).subscribe(
        () => {
          console.log('Administrador eliminado correctamente');
          this.getAdmins();
        },
        (error) => {
          console.error('Error al eliminar administrador:', error);
        }
      );
    }
  }

}