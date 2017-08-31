import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeaderPage } from '../shared/_header';

import { OpenNativeSettings } from '@ionic-native/open-native-settings';

@Component({
  selector: 'page-NativeSettings',
  templateUrl: 'NativeSettings.html'
})
export class NativeSettingsPage {

  

 @ViewChild(HeaderPage) Header: HeaderPage
  ionViewDidLoad(){
    this.Header.heeader_title = "NativeSettings";
  }

  constructor(public navCtrl: NavController, private openNativeSettings: OpenNativeSettings) {
  }
  

  GoOpenNativeSettings(setting){
    //  http://ionicframework.com/docs/native/open-native-settings/
    this.openNativeSettings.open(setting);
  }
}
