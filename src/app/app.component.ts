import { Component,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AdMobFreePage } from '../pages/AdMobFree/AdMobFree';
import { NativeSettingsPage } from '../pages/NativeSettings/NativeSettings';   
import { EtcPage } from '../pages/Etc/Etc';
import { Etc2Page } from '../pages/Etc2/Etc2';
import { Etc3Page } from '../pages/Etc3/Etc3';
import { Etc4Page } from '../pages/Etc4/Etc4';
import { Etc5Page } from '../pages/Etc5/Etc5';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild(Nav) nav: Nav;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  
SetPage(type){
    if(type=="Home"){
      this.nav.setRoot(HomePage);
    }
    else if(type=="AdMobFree"){
      this.nav.setRoot(AdMobFreePage);
    }
    else if(type=="NativeSettings"){
      this.nav.setRoot(NativeSettingsPage);
    }
    else if(type=="Etc"){
      this.nav.setRoot(EtcPage);
    }
    else if(type=="Etc2"){
      this.nav.setRoot(Etc2Page);
    }
    else if(type=="Etc3"){
      this.nav.setRoot(Etc3Page);
    }
    else if(type=="Etc4"){
      this.nav.setRoot(Etc4Page);
    }
    else if(type=="Etc5"){
      this.nav.setRoot(Etc5Page);
    }
    
    
    
  }
}

