import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeaderPage } from '../shared/_header';
import { AppRate } from '@ionic-native/app-rate';
import { BackgroundGeolocation, BackgroundGeolocationConfig,BackgroundGeolocationResponse} from '@ionic-native/background-geolocation';
import { BatteryStatus,BatteryStatusResponse } from '@ionic-native/battery-status';
import { BrowserTab } from '@ionic-native/browser-tab';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';



@Component({
  selector: 'page-Etc',
  templateUrl: 'Etc.html'
})
export class EtcPage {
  

 @ViewChild(HeaderPage) Header: HeaderPage
  ionViewDidLoad(){
    this.Header.heeader_title = "Etc";
  }

  constructor(public navCtrl: NavController,private appRate: AppRate
  ,private backgroundGeolocation: BackgroundGeolocation 
  ,private batteryStatus: BatteryStatus , private browserTab: BrowserTab
  ,private actionSheet: ActionSheet ,private androidFullScreen: AndroidFullScreen
  ) {
  }

   GoFull(){
      this.androidFullScreen.isImmersiveModeSupported()
    .then(() => this.androidFullScreen.immersiveMode())
    .catch((error: any) => console.log(error));
  }


GoActionSheet(){
   let buttonLabels = ['1번', '2번'];

    const options: ActionSheetOptions = {
      title: '이것이 title',
      subtitle: '이것이 subtitle',
      buttonLabels: buttonLabels,
      addCancelButtonWithLabel: 'Cancel',
      addDestructiveButtonWithLabel: 'Delete',
      androidTheme: this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK,
      destructiveButtonLast: true
    };

  this.actionSheet.show(options).then((buttonIndex: number) => {
    console.log('Button pressed: ' + buttonIndex);
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

  GoBatteryStatus(){
    // watch change in battery status
    let subscription = this.batteryStatus.onChange().subscribe(
    (status: BatteryStatusResponse) => {
      alert("status.level : "+status.level);
      alert("status.isPlugged : "+status.isPlugged);
      //console.log(status.level, status.isPlugged);
    }
    );

    // stop watch
    subscription.unsubscribe();
}


  GoAppRate(){
    // set certain preferences
    this.appRate.preferences.storeAppURL = {      
      android: 'market://details?id=io.ionic.LottoPlay'
    };

    this.appRate.promptForRating(true);

    // or, override the whole preferences object
    this.appRate.preferences = {
      usesUntilPrompt: 3,
      storeAppURL: {
        android: 'market://details?id=io.ionic.LottoPlay'
      }
    };

    this.appRate.promptForRating(false);
  }
  
  GoBackGroundGeolocation(){
    const config: BackgroundGeolocationConfig = {
            desiredAccuracy: 10,
            stationaryRadius: 20,
            distanceFilter: 30,
            debug: true, //  enable this hear sounds for background-geolocation life-cycle.
            stopOnTerminate: false, // enable this to clear background location settings when the app terminates
    };

        this.backgroundGeolocation.configure(config)
        .subscribe((location: BackgroundGeolocationResponse) => {
        console.log(location);
      });
      this.backgroundGeolocation.start();
  }

    StopBackGroundGeolocation(){
       this.backgroundGeolocation.stop();
    }

}
