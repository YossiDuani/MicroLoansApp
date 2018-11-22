import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoansdataPage} from '../loansdata/loansdata';
/**
 * Generated class for the TabaskloansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabaskloans',
  templateUrl: 'tabaskloans.html',
})
export class TabaskloansPage {

  bPSDchecked: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.bPSDchecked = false;
  }

  
  goToGetRate(txtAmount, txtPeriod, txtNoteException) {
    if (this.bPSDchecked) {
      txtAmount = txtAmount || 'No Amount Entered';
      txtPeriod = txtPeriod || 'No Period Entered';

      this.navCtrl.push(LoansdataPage, {
        data: txtAmount,
        data1: txtPeriod
      });
    }
    else {
      txtNoteException = 'No Amount Entered';
    }
  }

  checkpsd(event: any)
  {
    if (event.checked)
    {
      this.bPSDchecked = true;  
    }
       
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad TabaskloansPage');
  }

}
