import { Component } from '@angular/core';


import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PollPage } from '../poll/poll';
import { SubmitPage } from '../submit/submit';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PollPage;
  tab2Root = SubmitPage;
  tab3Root = ProfilePage;

  constructor(public navCtrl: NavController) {
    if (!this.isLoggedin()) {
      console.log('You are not logged in');
      this.navCtrl.setRoot(LoginPage);
    }
  }

  isLoggedin() {
    if (window.localStorage.getItem('currentuser')) {
      return true;
    }
  }


}
