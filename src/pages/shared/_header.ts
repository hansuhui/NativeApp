import { Component } from '@angular/core';

/* 
  참고 사이트 : https://ionicframework.com/docs/api/components/menu/Menu/
*/

@Component({
  selector: 'header-page',
  template: `
    <ion-header icon-left>
      <ion-toolbar>
      <button ion-button menuToggle icon-only>
          <ion-icon name='menu'></ion-icon>
        </button>
        <ion-title>{{heeader_title}}</ion-title>
      </ion-toolbar>
  </ion-header> 
`
})
export class HeaderPage {
  heeader_title = "";
  constructor() {}
  
}



@Component({
  selector: 'header-no-page',
  template: `
<ion-header icon-left>
    <ion-toolbar>
      <ion-title>{{heeader_title}}</ion-title>
    </ion-toolbar>
</ion-header> 
  `
})
export class NoMenuHeaderPage {
  heeader_title = "";
  constructor(){}
}
