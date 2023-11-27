import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegistrarPage implements OnInit {

  
nuevoUsuario: any = {
  id_usuario: null,
  name: '',
  last_name: '',
  correo: '',
  birthday:'',
  type: '',
  username: '',
  password: '',
};

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    ) { }

  ngOnInit() {
  }
  volverinicio(){
    this.router.navigate(['/login']);
  }
  agregarUsuario() {
    this.usuarioService.postAddUsuario(this.nuevoUsuario).subscribe(
      (response) => {
        // Procesa la respuesta aquí
        console.log('Usuario agregado con éxito:', response);
        // Limpia el formulario
        this.nuevoUsuario = { id_usuario: null ,name: '',last_name: '',correo: '',birthday:'',type: '',username: '',password: '', };
      },
      (error) => {
        // Maneja los errores aquí
        console.error('Error al agregar usuario:', error);
      }
    );
  }
}
