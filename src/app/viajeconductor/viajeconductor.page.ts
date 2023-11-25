import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ViajesService } from '../service/viajes.service';
import { firstValueFrom } from 'rxjs';

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
    console.log("lista usuario", this.listViaje)
  }
  volverinicio(){
    this.router.navigate(['/conductor']);
  }
  modificarViaje(viajeid: string, nuevoIdConductor: number): void{
    this.viaje.modificarViaje(viajeid, this.nuevoIdConductor)
      .subscribe(response => {
        // Manejar la respuesta, si es necesario
        console.log('Viaje modificado:',nuevoIdConductor, response);
      }, error => {
        // Manejar el error, si ocurre
        console.error('Error al modificar el viaje:', error);
      });
  }
}
