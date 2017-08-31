import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeaderPage } from '../shared/_header';

import { AdMobFree,AdMobFreeBannerConfig, AdMobFreeInterstitialConfig ,AdMobFreeRewardVideoConfig} from '@ionic-native/admob-free';

@Component({
  selector: 'page-AdMobFree',
  templateUrl: 'AdMobFree.html'
})
export class AdMobFreePage {
  ad_id1 = "" //베너광고
  ad_id2 = "" //전면광고
  ad_id3 = "" //리워드 전면광고
  

 @ViewChild(HeaderPage) Header: HeaderPage
  ionViewDidLoad(){
    this.Header.heeader_title = "AdMobFree";
  }

  constructor(public navCtrl: NavController,private admobFree: AdMobFree) {
  }

  banner(){
    try{
    const bannerConfig: AdMobFreeBannerConfig = {
      id : this.ad_id1,
      isTesting: true,
      autoShow: true
    };
    var banner = this.admobFree.banner;
    banner.config(bannerConfig);
    banner.prepare().then(() => {
      banner.show().then(() => {}).catch(e => alert(e));
    }).catch(e => alert(e));
    }catch(e){alert(e)};

}

  interstitial(){
    try{    
      const bannerConfig: AdMobFreeInterstitialConfig = {
        id : this.ad_id2,
        isTesting: true,
        autoShow: true
      };

      var interstitial =  this.admobFree.interstitial;
      interstitial.config(bannerConfig);

      interstitial.prepare().then(() => {
        interstitial.show().then(() => {}).catch(e => alert(e));
      }).catch(e => alert(e));
      }catch(e){alert(e)};
      

  }

  

   rewardVideo(){   
     try{    
        
      const bannerConfig: AdMobFreeRewardVideoConfig = { 
        id : this.ad_id3,
        isTesting: true,
        autoShow: true
      };

      var rewardVideo  = this.admobFree.rewardVideo;
      rewardVideo.config(bannerConfig);
      rewardVideo.prepare().then(() => {
        rewardVideo.show().then(() => {}).catch(e => alert(e));
      }).catch(e => alert(e));
      }catch(e){alert(e)};
      
  }

  hide(){
      this.admobFree.banner.hide();
  }


  
}
