import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  userObject: String = window.localStorage.getItem('currentuser') ? JSON.parse(window.localStorage.getItem('currentuser')) : '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private _firebaseAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  logout() {
    this._firebaseAuth.auth.signOut().then((data) => {
      window.localStorage.removeItem('currentuser');
      this.navCtrl.parent.parent.setRoot(LoginPage);
    })
  }

}
