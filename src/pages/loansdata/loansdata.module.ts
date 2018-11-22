import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoansdataPage } from './loansdata';

@NgModule({
  declarations: [
    LoansdataPage,
  ],
  imports: [
    IonicPageModule.forChild(LoansdataPage),
  ],
})
export class LoansdataPageModule {}
