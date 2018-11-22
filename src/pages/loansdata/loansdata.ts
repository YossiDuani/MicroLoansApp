import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoansdataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loansdata',
  templateUrl: 'loansdata.html',
})
export class LoansdataPage {

  txtAmount: number;
  txtPeriod: number;

  ratePerYearPrime: number;
  ratePeriodPrime: number;
  MonthlyPayPrime: number;
  TotalLoanPayPrime: number;
  LoanCostPrime: number;

  ratePerYearKalatz: number;
  ratePeriodKalatz: number;
  MonthlyPayKalatz: number;
  TotalLoanPayKalatz: number;
  LoanCostKalatz: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.txtAmount = navParams.get('data');
    this.txtPeriod = navParams.get('data1');

    this.ratePerYearPrime = 1;
    this.ratePeriodPrime = this.ratePerYearPrime / 1200;
    this.MonthlyPayPrime = this.txtAmount*(this.ratePeriodPrime/(1-(1/(Math.pow((1*1+this.ratePeriodPrime*1),this.txtPeriod)))));
    this.MonthlyPayPrime = Math.round(this.MonthlyPayPrime);
    this.TotalLoanPayPrime = (this.MonthlyPayPrime*this.txtPeriod) - this.txtAmount;
    this.LoanCostPrime = Math.round(this.TotalLoanPayPrime/this.txtAmount*100); 

    this.ratePerYearKalatz = 3;
    this.ratePeriodKalatz = this.ratePerYearKalatz / 1200;
    this.MonthlyPayKalatz = this.txtAmount*(this.ratePeriodKalatz/(1-(1/(Math.pow((1*1+this.ratePeriodKalatz*1),this.txtPeriod)))));
    this.MonthlyPayKalatz = Math.round(this.MonthlyPayKalatz);
    this.TotalLoanPayKalatz = (this.MonthlyPayKalatz*this.txtPeriod) - this.txtAmount;
    this.LoanCostKalatz = Math.round(this.TotalLoanPayKalatz/this.txtAmount*100);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoansdataPage');
  }

}
