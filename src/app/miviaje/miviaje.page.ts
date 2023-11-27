import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-miviaje',
  templateUrl: './miviaje.page.html',
  styleUrls: ['./miviaje.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MiviajePage implements OnInit {
  @Input() marker: any;
  constructor() { }

  ngOnInit() {
  }



  // const modal = await this.modaCtrl.create({
  //   component: ModalPage,
  //   componentProps:{
  //    marker,
  //   },
  //   breakpoints: [0, 0.3],
  //   initialBreakpoint: 0.3,
  // });
  // modal.present();
}
