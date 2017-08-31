import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeaderPage } from '../shared/_header';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Screenshot } from '@ionic-native/screenshot';
import { Sim } from '@ionic-native/sim';  
import { SMS } from '@ionic-native/sms';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { StatusBar } from '@ionic-native/status-bar';



@Component({
  selector: 'page-Etc4',
  templateUrl: 'Etc4.html'
})
export class Etc4Page {
  

 @ViewChild(HeaderPage) Header: HeaderPage
  ionViewDidLoad(){
    this.Header.heeader_title = "Etc4";
  }

  constructor(public navCtrl: NavController
  ,private screenOrientation: ScreenOrientation
  ,private screenshot: Screenshot ,private sim: Sim
  ,private sms: SMS , private socialSharing: SocialSharing
  ,private speechRecognition: SpeechRecognition,private spinnerDialog: SpinnerDialog
  ,private splashScreen: SplashScreen, private sqlite: SQLite
  ,private statusBar: StatusBar
  ) {
  }

  GoStatusBar_Code(){
    // let status bar overlay webview
    this.statusBar.overlaysWebView(true);
    // set status bar to white
    this.statusBar.backgroundColorByHexString('#BDBDBD');
  }

   GoStatusBar_backgroundColorByName(){
    this.statusBar.backgroundColorByName("blue");
  }


  GoStatusBar_show(){
    this.statusBar.show();
  }

  GoStatusBar_hide(){
    this.statusBar.hide();
  }
  



  GoSQLite(){
    this.sqlite.create({name: 'data.db',location: 'default'})
    .then((db: SQLiteObject) => {
        db.executeSql('create table danceMoves(name VARCHAR(32))', {})
          .then(() => alert('Executed SQL')).catch(e => {
            for(var s in e){
              alert(s +"-"+ e[s]);
            }
          });
    }).catch(e => {
            for(var s in e){
              alert(s +"-"+ e[s]);
            }
          });
  
  }

   GoSQLite_drop(){
    this.sqlite.create({name: 'data.db',location: 'default'})
    .then((db: SQLiteObject) => {
        db.executeSql('drop table danceMoves', {})
          .then(() => alert('Executed SQL'))
          .catch(e => {
            for(var s in e){
              alert(s +"-"+ e[s]);
            }
          });
    }).catch(e => {
            for(var s in e){
              alert(s +"-"+ e[s]);
            }
          });
  
  }

  GoSplashScreen(){
    this.splashScreen.show();
    setTimeout(function(){this.splashScreen.hide()},2000);
  }

  GoSpinnerDialog(){
    this.spinnerDialog.show("제목","메시지",function(){alert("취소한거지?");});
    setTimeout(function(){this.spinnerDialog.hide()},2000);
  }

  GoSpeechRecognition_permission(){
    // Check permission
    this.speechRecognition.hasPermission()
    .then((hasPermission: boolean) => alert(hasPermission))

    // Request permissions
    this.speechRecognition.requestPermission()
    .then(
      () => alert('Granted'),
      () => alert('Denied')
    )

    // Get the list of supported languages
this.speechRecognition.getSupportedLanguages()
  .then(
    (languages: Array<string>) => alert(languages),
    (error) => alert(error)
  )

}

  GoSpeechRecognition(){
// Check feature available
  //this.speechRecognition.isRecognitionAvailable()
  //.then((available: boolean) => alert("isRecognitionAvailable - " + available))

// Start the recognition process
this.speechRecognition.startListening()
  .subscribe(
    (matches: Array<string>) => alert(matches),
    (onerror) => alert('error:'+ onerror)
  )

// Stop the recognition process (iOS only)
//this.speechRecognition.stopListening()


  }

  //http://ionicframework.com/docs/native/social-sharing/
  GoSocialSharing(){
    // Check if sharing via email is supported
    this.socialSharing.canShareViaEmail().then(() => {
      alert("possible");
      // Sharing via email is possible
    }).catch(() => {
      // Sharing via email is not possible
      alert(" not possible");
    });

    // Share via email
    this.socialSharing.shareViaEmail('Body', 'Subject', ['poixgks@naver.com']).then(() => {
      // Success!
      alert("Success!");
    }).catch(() => {
      // Error!
      alert("Error!");
    });
  }

GoSocialSharing_Facebook(){
  this.socialSharing.shareViaFacebook("LottoPlay(로또플레이)", "", "https://play.google.com/store/apps/details?id=io.ionic.LottoPlay").then(() => {
      // Success!
      alert("Success!");
    }).catch(() => {
      // Error!
      alert("Error!");
    });
}


GoSocialSharing_shareVia(){
  //shareVia(appName, message, subject, image, url)
  this.socialSharing.shareVia("com.kakao.talk","", "LottoPlay(로또플레이) \n","", "https://play.google.com/store/apps/details?id=io.ionic.LottoPlay").then(() => {
      // Success!
      alert("Success!");
    }).catch(() => {
      // Error!
      alert("Error!");
    });
}

  GoSMS(){
        this.sms.send("01020274345", "메시지 들어간다.",{replaceLineBreaks:true,android:{intent:"INTENT"}});
  }

  GoSim_hasReadPermission(){
    this.sim.hasReadPermission().then( (info) => alert('Has permission: '+ info));
  }

  GoSim_Info(){
      this.sim.getSimInfo().then(
        (info) => {
          for(var s in info){
            alert(s +" - "+ info[s]);
          }
        },
        (err) => alert('Unable to get sim info: '+ err)
      );
  }

  GoSim_requestReadPermission(){
      this.sim.requestReadPermission().then(
      () => alert('Permission granted'),
      () => alert('Permission denied'));
  }

  GoScreenshot(){
      // Take a screenshot and save to file
      this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then(
        (info) => {
          for(var s in info){
            alert(s +" - "+ info[s]);
          }
        }
        ,(info) => {
          for(var s in info){
            alert(s +" - "+ info[s]);
          }
        }
        );
      // Take a screenshot and get temporary file URI
      this.screenshot.URI(80).then(
        (info) => {
          for(var s in info){
            alert(s +" - "+ info[s]);
          }
        }
        ,(info) => {
          for(var s in info){
            alert(s +" - "+ info[s]);
          }
        }
      );

  }

  GoScreenOrientation_lock(){
    // set to landscape
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  GoScreenOrientation_unlock(){
    // allow user rotate
    this.screenOrientation.unlock();
  }

  GoScreenOrientation_type(){
    alert(this.screenOrientation.type); 
  }

  GoScreenOrientation_onChange(){
    this.screenOrientation.onChange().subscribe(() => {alert("Orientation Changed");});
  }

  
  
}
