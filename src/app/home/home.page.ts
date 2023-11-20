import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GoogleMap, Marker, Polyline } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { async } from '@angular/core/testing';
import { ViajePage } from '../viaje/viaje.page';
import { ModalPage } from '../modal/modal.page';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage {
  @ViewChild('map')
  mapRef!: ElementRef;
  map: GoogleMap | undefined;
 
  constructor(private router: Router,private modaCtrl:ModalController) {
    this.map = undefined;
  }

  ionViewDidEnter() {
    this.createMap();
  }

  async createMap() {
    this.map = await GoogleMap.create({
      id: 'my-cool-map',
      element: this.mapRef.nativeElement,
      apiKey: environment.mapsKey,
      config: {
        center: {
          lat:-33.05480809571986,
          lng:-71.42431344541667,
        },
        zoom: 8,
      },
    });
    this.addMarkers();
  }
  async addPolylines(polylines: Polyline[]) {
    if (this.map) {
      const polylineIds = await this.map.addPolylines(polylines);
      console.log('Polyline IDs:', polylineIds);
    }
  }
  async addMarkers() {
    const markers: Marker[] = [
      {
        coordinate: {
          lat: -33.033636809494006,
          lng: -71.53313654919491,
        },
        title: 'Origen',
        snippet: 'This is marker 1',
      },
      {
        coordinate: {
          lat: -33.05480809571986,
          lng: -71.42431344541667,
        },
        title: 'Destino',
        snippet: 'This is marker 2',
      },
    ];
    
    const result = await this.map?.addMarkers(markers);
    console.log(result);
    // inicio polilyne
    const polylines: Polyline[] = [
      {
        path: [
          { lat: -33.033636809494006, lng: -71.53313654919491 },
          { lat: -33.05480809571986, lng: -71.42431344541667 },
        ],
        strokeColor: '#F82E02',
      },
    ];
    console.log(polylines);
    this.addPolylines(polylines);

  
    // fin polilyne


     this.map?.setOnMarkerClickListener(async   (marker) =>{

      const modal = await this.modaCtrl.create({
        component: ModalPage,
        componentProps:{
         marker,
        },
        breakpoints: [0, 0.3],
        initialBreakpoint: 0.3,
      });
      modal.present();


     })
  }

  volverinicio(){
    this.router.navigate(['/login']);
  }
  
}
