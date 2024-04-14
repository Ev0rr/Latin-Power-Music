import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

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

  constructor(private adminService: AdminService) { }

  showAddForm() {
    this.showForm = true;
    this.editing = false;
    this.admin = {}; // Reinicializa el objeto admin
  }

  submitForm() {
    if (this.editing) {
      // Lógica para editar un administrador existente
    } else {
      this.adminService.addAdmin(this.admin).subscribe(
        (response) => {
          console.log('Administrador agregado correctamente:', response);
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
      },
      (error) => {
        console.error('Error al obtener administradores:', error);
      }
    );
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0]; // Obtiene el archivo seleccionado
    const reader = new FileReader();
  
    // Define la lógica a ejecutar cuando se complete la carga del archivo
    reader.onload = (e: any) => {
      // Asigna la imagen seleccionada al objeto admin
      this.admin.imagen = e.target.result;
    };
  
    // Lee el contenido del archivo como una URL de datos
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
