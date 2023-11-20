import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, NavigationExtras, RouterLinkWithHref } from '@angular/router';
import { IUserLogin } from '../models/IUserLogin';
import { firstValueFrom } from 'rxjs';
import { UsuarioService } from '../service/usuario.service';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLinkWithHref, FormsModule]})
export class LoginPage implements OnInit {
  isAlertOpen = false;
  alertButtons = ['Reintentar'];
  listUser: any;
  usuario  :any ;

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  userLoginModal: IUserLogin = {
    correo: '',
    password: ''
  };

  constructor(private route: Router,private usuarioService: UsuarioService) { }

  async ngOnInit() {
    this.userLoginModalRestart();

    this.listUser = await firstValueFrom(this.usuarioService.getusuarios());
    console.log("lista usuario", this.listUser)
    


  }

  async guardarusuario(){
  const setuserid = async () => {
    await Preferences.set({
      key: 'userid',
      value: 'this.usuario',
    });
  };
}


  async mostrar(){    

    const checkuserid = async () => {
      const { value } = await Preferences.get({ key: 'userid' });
    
      console.log(`Hello ${value}!`);
      return value;
    };

  }

  userLogin(userLoginInfo: IUserLogin): boolean{
    for(let i = 0; i < this.listUser.length; i++){
      console.log('User Loged...', this.listUser[i].correo == userLoginInfo.correo ,this.listUser[i].password == userLoginInfo.password);
      console.log("lista usuario", this.listUser)
      if((this.listUser[i].correo == userLoginInfo.correo) && (this.listUser[i].password == userLoginInfo.password)){
        console.log('User Loged...', this.userLoginModal.correo, this.userLoginModal.correo);
        let userInfoSend: NavigationExtras = {
          state: {
            user: this.listUser[i]
          }
        }

        this.usuario = this.listUser[i];

        this.guardarusuario();
        console.log(this.mostrar());


       
        

        if(this.listUser[i].type == 'alumno'){
          this.route.navigate(['/alumno'], userInfoSend);
          return true;
        }else{
         this.route.navigate(['/conductor'], userInfoSend);
          return true;
        }
      }
      else{
     
      
      }
    }
    this.setOpen (true);
    this.userLoginModalRestart();
    return false;

    
  }

  userLoginModalRestart(): void{
    this.userLoginModal.correo = '';
    this.userLoginModal.password = '';
  }
// +++++++++++++++++++++++++++++++++++++++

registrar() {
  this.route.navigate(['/registrar']);

}

}
