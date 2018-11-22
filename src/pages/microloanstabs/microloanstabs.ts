import { TabprofileinfoPage } from './../tabprofileinfo/tabprofileinfo';
import { TabaskloansPage } from './../tabaskloans/tabaskloans';
import { TabsPage } from './../tabs/tabs';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav } from 'ionic-angular';

/**
 * Generated class for the MicroloanstabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}



@IonicPage()
@Component({
  selector: 'page-microloanstabs',
  templateUrl: 'microloanstabs.html',
})
export class MicroloanstabsPage {
  rootPage = 'TabsPage';

  @ViewChild(Nav) nav: Nav;
 
  pages: PageInterface[] = [
    { title: 'Tab 1', pageName: 'Tabs', tabComponent: 'TabaskloansPage', index: 0, icon: 'home' },
    { title: 'Tab 2', pageName: 'Tabs', tabComponent: 'TabprofileinfoPage', index: 1, icon: 'contacts' },
    { title: 'Special', pageName: 'SpecialPage', icon: 'shuffle' },
  ];
 

  constructor(public navCtrl: NavController) { }
  //constructor(public navCtrl: NavController, public navParams: NavParams) {
  //}

  openPage(page: PageInterface) {
    let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }
  }
 
  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MicroloanstabsPage');
  }

}
