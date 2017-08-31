import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AdMobFreePage } from '../pages/AdMobFree/AdMobFree';   
import { NativeSettingsPage } from '../pages/NativeSettings/NativeSettings';   

import { EtcPage } from '../pages/Etc/Etc';
import { Etc2Page } from '../pages/Etc2/Etc2';
import { Etc3Page } from '../pages/Etc3/Etc3';
import { Etc4Page } from '../pages/Etc4/Etc4';
import { Etc5Page } from '../pages/Etc5/Etc5';



/* Layout Page */
import { HeaderPage,NoMenuHeaderPage } from '../pages/shared/_header';



/* 추가  */
import { Camera } from '@ionic-native/camera';
import { ActionSheet } from '@ionic-native/action-sheet';
import { AdMobFree } from '@ionic-native/admob-free';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { AppRate } from '@ionic-native/app-rate';
import { BackgroundGeolocation} from '@ionic-native/background-geolocation';
import { BatteryStatus } from '@ionic-native/battery-status';
import { BrowserTab } from '@ionic-native/browser-tab';
import { AppVersion } from '@ionic-native/app-version';
import { CallNumber } from '@ionic-native/call-number';
import { DatePicker } from '@ionic-native/date-picker';
import { Dialogs } from '@ionic-native/dialogs';
import { FileChooser } from '@ionic-native/file-chooser';
import { Flashlight } from '@ionic-native/flashlight';
import { Geolocation } from '@ionic-native/geolocation';
import { HeaderColor } from '@ionic-native/header-color';
import { Insomnia } from '@ionic-native/insomnia';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { Market } from '@ionic-native/market';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Screenshot } from '@ionic-native/screenshot';
import { Sim } from '@ionic-native/sim';
import { SMS } from '@ionic-native/sms';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { SQLite } from '@ionic-native/sqlite';
import { Stepcounter } from '@ionic-native/stepcounter';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { ThemeableBrowser } from '@ionic-native/themeable-browser';
import { Toast } from '@ionic-native/toast';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { Vibration } from '@ionic-native/vibration';
import { VideoPlayer } from '@ionic-native/video-player';
import { FilePath } from '@ionic-native/file-path';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { Hotspot } from '@ionic-native/hotspot';
import { WebIntent } from '@ionic-native/web-intent';




class CameraMock extends Camera {
  getPicture(options) {
    return new Promise((resolve, reject) => {
      resolve("BASE_64_ENCODED_DATA_GOES_HERE");
    })
  }
}


let providersSet = [
    Hotspot,
    WebIntent,
    YoutubeVideoPlayer,
    HeaderColor,
    UniqueDeviceID,
    FilePath,
    VideoPlayer,
    Vibration,
    ThemeableBrowser,
    Toast,
    Stepcounter,
    TextToSpeech,
    SQLite,
    StreamingMedia,
    Screenshot,
    SocialSharing,
    SpinnerDialog,
    Sim,
    SMS,
    SpeechRecognition,
    ScreenOrientation,
    OpenNativeSettings,
    NativeGeocoder,
    Market,
    LaunchNavigator,
    Insomnia,
    Geolocation,
    StatusBar,
    SplashScreen,
    ActionSheet,
    AdMobFree,
    AndroidFullScreen,
    AppRate,
    BackgroundGeolocation,
    BatteryStatus,
    BrowserTab,
    AppVersion,
    CallNumber,
    DatePicker,
    Dialogs,
    FileChooser,
    Flashlight,
    {provide: Camera, useClass: CameraMock },
    {provide: ErrorHandler, useClass: IonicErrorHandler}

]

let PageSet = [
    MyApp,
    HomePage,
    HeaderPage,
    AdMobFreePage,
    EtcPage,
    Etc2Page,
    Etc3Page,
    Etc4Page,
    Etc5Page,
    NativeSettingsPage,
    NoMenuHeaderPage
  ]


@NgModule({
  declarations: PageSet,
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: PageSet,
  providers: providersSet
})
export class AppModule {}

