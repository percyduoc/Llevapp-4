import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-apk',
  templateUrl: './apk.page.html',
  styleUrls: ['./apk.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ApkPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
