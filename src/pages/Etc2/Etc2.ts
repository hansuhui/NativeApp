import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeaderPage } from '../shared/_header';
import { BrowserTab } from '@ionic-native/browser-tab';
import { AppVersion } from '@ionic-native/app-version';
import { CallNumber } from '@ionic-native/call-number';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DatePicker } from '@ionic-native/date-picker';


@Component({
  selector: 'page-Etc2',
  templateUrl: 'Etc2.html'
})
export class Etc2Page {
  

 @ViewChild(HeaderPage) Header: HeaderPage
  ionViewDidLoad(){
    this.Header.heeader_title = "Etc2";
  }

  constructor(public navCtrl: NavController, private browserTab: BrowserTab
  ,private appVersion: AppVersion , private callNumber: CallNumber , private camera: Camera
  ,private datePicker: DatePicker
  ) {
  }

  GoDatePicker(){
      this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => {console.log('Got date: ', date); alert('Got date: '+ date);},
      err => console.log('Error occurred while getting date: ', err)
    );
  }
  

  GoCamera(){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    let base64Image = 'data:image/jpeg;base64,' + imageData;
    alert(base64Image);
    }, (err) => {
    // Handle error
    });
    
  }

  GoBrowserTab(){
  this.browserTab.isAvailable()
    .then((isAvailable: boolean) => {

      if (isAvailable) {
        this.browserTab.openUrl('https://ionic.io');
      } else {
        // open URL with InAppBrowser instead or SafariViewController
        alert("InAppBrowser 대신 SafariViewController를 사용하여 URL을여십시오.");
      }

    });
  }
  GoAppVersion(){
      let AppName =  this.appVersion.getAppName();
      let PackageName =  this.appVersion.getPackageName();
      let VersionCode =  this.appVersion.getVersionCode();
      let VersionNumber =  this.appVersion.getVersionNumber();

      AppName.then((val) =>{ alert("AppName -"+val);});
      PackageName.then((val) =>{ alert("PackageName -"+val);});
      VersionCode.then((val) =>{ alert("VersionCode -"+val);});
      VersionNumber.then((val) =>{ alert("VersionNumber -"+val);});
  }

  GoCallNumber(){
    this.callNumber.callNumber("01020274345", true)
  .then(() => console.log('Launched dialer!'))
  .catch(() => console.log('Error launching dialer'));
  }
}
