import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {MicroloanstabsPage} from '../pages/microloanstabs/microloanstabs';
import { TabaskloansPage } from '../pages/tabaskloans/tabaskloans';
import { TabprofileinfoPage } from '../pages/tabprofileinfo/tabprofileinfo';
import { TabsPage } from '../pages/tabs/tabs';
import {LoansdataPage} from '../pages/loansdata/loansdata';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MicroloanstabsPage,
    LoansdataPage
    //TabaskloansPage,
    //TabprofileinfoPage,
    //TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MicroloanstabsPage,
    LoansdataPage
    //TabaskloansPage,
    //TabprofileinfoPage,
    //TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
