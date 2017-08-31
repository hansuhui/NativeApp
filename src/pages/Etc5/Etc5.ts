import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeaderPage } from '../shared/_header';
import { Stepcounter } from '@ionic-native/stepcounter';
import { StreamingMedia, StreamingVideoOptions,StreamingAudioOptions } from '@ionic-native/streaming-media';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';
import { Toast } from '@ionic-native/toast';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { Vibration } from '@ionic-native/vibration';
import { FilePath } from '@ionic-native/file-path';
import { FileChooser } from '@ionic-native/file-chooser';
import { VideoPlayer } from '@ionic-native/video-player';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot';
import { WebIntent } from '@ionic-native/web-intent';

@Component({
  selector: 'page-Etc5',
  templateUrl: 'Etc5.html'
})
export class Etc5Page {

  VidoeUrl = "";
  Vidoepath = "";

 @ViewChild(HeaderPage) Header: HeaderPage
  ionViewDidLoad(){
    this.Header.heeader_title = "Etc5";
  }

  constructor(public navCtrl: NavController
  ,private stepcounter: Stepcounter , private streamingMedia: StreamingMedia
  ,private tts: TextToSpeech , private themeableBrowser: ThemeableBrowser
  ,private toast: Toast , private uniqueDeviceID: UniqueDeviceID
  ,private vibration: Vibration , private fileChooser: FileChooser
  ,private videoPlayer: VideoPlayer , private filePath: FilePath
  ,private youtube: YoutubeVideoPlayer , private hotspot: Hotspot
  ,private webIntent: WebIntent 
  ) {
  }


  GoHotspot(){
    this.hotspot.scanWifi().then((networks: Array<HotspotNetwork>) => {alert(networks);});
  }

  GoWebIntent(){
      const options = {
      action: this.webIntent.ACTION_VIEW,
      url: 'path/to/file',
      type: 'application/vnd.android.package-archive'
    };

    this.webIntent.startActivity(options)
    .then(onSuccess =>(console.log(onSuccess))
    , onError =>(console.log(onError))
    );
  }

  GoYoutubeVideoPlayer(){
    this.youtube.openVideo('foVPlWFIPUo');
  }

  GoYoutubeVideoPlayer2(){
    this.youtube.openVideo('j6IOzgU4xBg');
  }

  GoVideoPlayer(){
    if(this.Vidoepath == "" || this.Vidoepath == undefined){
        alert("동영상이 선택되지 않았습니다.");
        this.GoFileChooser();
        return false;
    }

    // Playing a video.
    this.videoPlayer.play(this.Vidoepath)
    .then(() => {alert('video completed');})
    .catch(err => {alert(err);});
  }

  GoFileChooser(){
    this.fileChooser.open()
    .then(uri => {
      this.VidoeUrl = uri;
      alert(this.VidoeUrl);
      this.filePath.resolveNativePath(uri)
        .then(filePath => {
          this.Vidoepath = filePath; 
          alert(filePath);}
          ).catch(err => console.log(err));
    }).catch(e => console.log(e));
  }

  GoVibration(){
    //this.vibration.vibrate(1000);

    // Vibrate 2 seconds
    // Pause for 1 second
    // Vibrate for 2 seconds
    // Patterns work on Android and Windows only
    this.vibration.vibrate([2000,1000,2000]);
  }
  
  GoVibration_Stop(){
    this.vibration.vibrate(0);
  }

  GoUniqueDeviceID(){
      this.uniqueDeviceID.get()
      .then((uuid: any) => alert("UniqueDeviceID : "+uuid))
      .catch((error: any) => alert(error));
  }

  GoToast(){
      this.toast.show(`I'm a toast`, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
  }

  GoThemeableBrowser(){
      // can add options from the original InAppBrowser in a JavaScript object form (not string)
      // This options object also takes additional parameters introduced by the ThemeableBrowser plugin
      // This example only shows the additional parameters for ThemeableBrowser
      // Note that that `image` and `imagePressed` values refer to resources that are stored in your app
      const options: ThemeableBrowserOptions = {
          statusbar: {
              color: '#ffffffff'
          },
          toolbar: {
              height: 44,
              color: '#f0f0f0ff'
          },
          title: {
              color: '#003264ff',
              showPageTitle: true
          },
          backButton: {
              image: 'back',
              imagePressed: 'back_pressed',
              align: 'left',
              event: 'backPressed'
          },
          forwardButton: {
              image: 'forward',
              imagePressed: 'forward_pressed',
              align: 'left',
              event: 'forwardPressed'
          },
          closeButton: {
              image: 'close',
              imagePressed: 'close_pressed',
              align: 'left',
              event: 'closePressed'
          },
          customButtons: [
              {
                  image: 'share',
                  imagePressed: 'share_pressed',
                  align: 'right',
                  event: 'sharePressed'
              }
          ],
          menu: {
              image: 'menu',
              imagePressed: 'menu_pressed',
              title: 'Test',
              cancel: 'Cancel',
              align: 'right',
              items: [
                  {
                      event: 'helloPressed',
                      label: 'Hello World!'
                  },
                  {
                      event: 'testPressed',
                      label: 'Test!'
                  }
              ]
          },
          backButtonCanClose: true
      };

      const browser: ThemeableBrowserObject = this.themeableBrowser.create('http://222.122.202.220/Sadmin/Home/index', '_blank', options);
      browser.show();
  }

  GoTextToSpeech_kr(){
    this.tts.speak({text:"한글 나온다. 귀열어라",locale:"ko-KR",rate:1})
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
  }

  GoTextToSpeech_En(){
    this.tts.speak({text:"English comes out. Open your ears.",locale:"en-US",rate:1})
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
  }

  GoStreamingMedia_Video(){
    //http://ionicframework.com/docs/native/streaming-media/
    let options: StreamingVideoOptions = {
        successCallback: () => { console.log('Video played') },
        errorCallback: (e) => { console.log('Error streaming') },
        orientation: 'landscape'
      };

    this.streamingMedia.playVideo('https://tvetamovie.pstatic.net/libs/1172/1172626/33db70ade11eb1353c60_20170828160028073.mp4-pBASE-v0-f36932-20170828160319067.mp4', options);
  }

  GoStreamingMedia_Audio(){
    //http://ionicframework.com/docs/native/streaming-media/
    let options: StreamingAudioOptions = {
        successCallback: () => { alert('Audio played') },
        errorCallback: (e) => { alert('Error streaming') },
        bgImage : "https://i.ytimg.com/vi/_DVWbJHQ9IE/maxresdefault.jpg"
      };

    this.streamingMedia.playAudio('http://222.122.202.220//upload_data/Test.mp3', options);
  }
  
  Stepcounter_Start(){
        this.stepcounter.start(1)
        .then(onSuccess => alert('stepcounter-start success : '+ onSuccess)
        , onFailure => alert('stepcounter-start error : '+ onFailure));
  }

  Stepcounter_Stop(){
    this.stepcounter.stop();
  }

  Stepcounter_getTodayStepCount(){
    this.stepcounter.getTodayStepCount().then(onSuccess => alert('TodayStepCount : '+ onSuccess));
  }


  Stepcounter_getStepCount(){
    this.stepcounter.getStepCount().then(onSuccess => alert('TodayStepCount : '+ onSuccess));
  }

  Stepcounter_getHistory(){
    this.stepcounter.getHistory()
    .then(historyObj => {
      for(var s in historyObj){
        alert(s+' : '+ historyObj[s]);
      }
    }
    , onFailure => alert('stepcounter-history error :'+ onFailure));
  }
  
  
}
