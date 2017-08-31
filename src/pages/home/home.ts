import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeaderPage } from '../shared/_header';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   @ViewChild(HeaderPage) Header: HeaderPage
    ionViewDidLoad(){
    this.Header.heeader_title = "Main";
  }

  constructor(public navCtrl: NavController) {

  }

  


}
