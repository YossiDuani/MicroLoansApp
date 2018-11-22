import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { NavController } from 'ionic-angular';
import {MicroloanstabsPage} from '../microloanstabs/microloanstabs';
import {TabsPage} from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  microloanstabsPage = MicroloanstabsPage;
  tabs = TabsPage;
  constructor(public navCtrl: NavController) {
    
  }
  

  doLogin() {
    this.navCtrl.setRoot('TabsPage');
  }

}
