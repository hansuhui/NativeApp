import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeaderPage } from '../shared/_header';
import { DatePicker } from '@ionic-native/date-picker';
import { Dialogs } from '@ionic-native/dialogs';
import { FileChooser } from '@ionic-native/file-chooser';
import { Flashlight } from '@ionic-native/flashlight';
import { Geolocation } from '@ionic-native/geolocation';
import { HeaderColor } from '@ionic-native/header-color';
import { Insomnia } from '@ionic-native/insomnia';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Market } from '@ionic-native/market';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { FilePath } from '@ionic-native/file-path';


@Component({
  selector: 'page-Etc3',
  templateUrl: 'Etc3.html'
})
export class Etc3Page {
  

 @ViewChild(HeaderPage) Header: HeaderPage
  ionViewDidLoad(){
    this.Header.heeader_title = "Etc3";
  }

  constructor(public navCtrl: NavController,private datePicker: DatePicker
  ,private dialogs: Dialogs , private fileChooser: FileChooser
  ,private flashlight: Flashlight , private geolocation: Geolocation
  ,private headerColor: HeaderColor ,private insomnia: Insomnia
  ,private launchNavigator: LaunchNavigator ,private market: Market
  ,private nativeGeocoder: NativeGeocoder  , private filePath: FilePath
  ) {
  }

 


  GoNativeGeocoder(){
      this.nativeGeocoder.reverseGeocode(37.4569945,126.6586702)
      .then((result: NativeGeocoderReverseResult) => alert('result.countryName -  ' + result.countryName + ' , result.countryCode - ' + result.countryCode+" , result.locality -"+ result.locality))
      .catch((error: any) => console.log(error));
  }

   GoNativeGeocoder_forward(){
      this.nativeGeocoder.forwardGeocode('인천광역시 남구 용현1.4동 61-76')
      .then((coordinates: NativeGeocoderForwardResult) => alert('The coordinates are latitude=' + coordinates.latitude + ' and longitude=' + coordinates.longitude))
      .catch((error: any) => console.log(error));
  }

  GoMarket(){
    this.market.open('io.ionic.LottoPlay');
  }

  GoLaunchNavigator(){
    let options: LaunchNavigatorOptions = {
      start: 'London, ON',
      app:""
    };

  this.launchNavigator.navigate('Toronto, ON', options)
    .then(
      success => console.log('Launched navigator'),
      error => console.log('Error launching navigator', error)
    );

 }
  GoInsomnia_keepAwake(){

    this.insomnia.keepAwake()
    .then(
      () => alert('화면이 안꺼짐'),
      () => console.log('error')
    );


}

 GoInsomnia_allowSleepAgain(){
      this.insomnia.allowSleepAgain()
      .then(
        () => alert('화면이 꺼짐'),
        () => console.log('error')
      );
  }



  GoHeaderColor(){
    this.headerColor.tint('#becb29');
    setTimeout(
      function(){
        this.headerColor.tint('#C91111');
      },1000
    )
  }
  

  GoGeolocation(){
      this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      alert("resp.coords.latitude = "+resp.coords.latitude);
      alert("resp.coords.longitude = "+resp.coords.longitude);
      }).catch((error) => {
        console.log('Error getting location', error);
      });
  } 

   GoGeolocation_watch(){
      let watch = this.geolocation.watchPosition();
      watch.subscribe((data) => {
        // data can be a set of coordinates, or an error (if an error occurred).
        // data.coords.latitude
        // data.coords.longitude
        alert("data.coords.latitude = "+data.coords.latitude);
        alert("data.coords.longitude = "+data.coords.longitude);
      });
  }

  GoFlashlight(){
    this.flashlight.toggle();
    //this.flashlight.switchOn();
    //this.flashlight.switchOff();
  }


  GoFileChooser(){
    var path = "";
    this.fileChooser.open()
    .then(uri => {alert(uri); path = uri;})
    .catch(e => console.log(e));

    this.filePath.resolveNativePath(path)
      .then(filePath => {alert(filePath);})
      .catch(err => console.log(err));
  }

  GoDialogs_alert(){
      this.dialogs.alert('다이얼로그 - alert')
      .then(() => console.log('Dialog dismissed'))
      .catch(e => console.log('Error displaying dialog', e));
  }

  GoDialogs_confirm(){
      this.dialogs.confirm('다이얼로그 - confirm', '제목',["Yes","No","Good"])
      .then((data) => 
      {
         console.log('data - '+ data);
         alert('data - '+ data);
      })
      .catch(e => console.log('Error displaying dialog', e));
  }

   GoDialogs_prompt(){
      this.dialogs.prompt('다이얼로그 - prompt', '제목',["Yes","No","Good"],"입력하라")
      .then((data) => 
      {
         console.log('data - '+ data);
         alert('data - '+ data);
         let data_int = parseInt(data.input1);
         this.dialogs.beep(data_int);
      })
      .catch(e => console.log('Error displaying dialog', e));

      
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
  
}
