import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ViajesService } from '../service/viajes.service';
import { firstValueFrom } from 'rxjs';
import { Preferences } from '@capacitor/preferences';


@Component({
  selector: 'app-viajeconductor',
  templateUrl: './viajeconductor.page.html',
  styleUrls: ['./viajeconductor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ViajeconductorPage implements OnInit {
  listViaje: any;
  nuevoIdConductor!: number  

  constructor(private router: Router,private viaje: ViajesService) { }
  
  async ngOnInit() {
    this.listViaje = await firstValueFrom(this.viaje.getViajes());
    console.log("lista usuario", this.listViaje);
    // 

  
    const userid = await Preferences.get({ key: 'userid' });
    console.log(userid.value?.toString());
    this.nuevoIdConductor = parseInt(userid.value?.toString() || '0');

      //OBTIENE NUMBER
  }
  volverinicio(){
    this.router.navigate(['/conductor']);
  }
  modificarViaje(viajeid: string): void{
    this.viaje.modificarViaje(viajeid, this.nuevoIdConductor)
      .subscribe((response: any) => {
        // Manejar la respuesta, si es necesario
        console.log('Viaje modificado:',this.nuevoIdConductor, response);
      }, (error: any) => {
        // Manejar el error, si ocurre
        console.error('Error al modificar el viaje:', error);
      });
  }
}
