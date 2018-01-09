import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: any;
  password: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginWithGoogle() {
    this.authProvider.signInWithGoogle().then((data) => {
      console.log('Login success ' + JSON.stringify(data));
      let currentuser = {
        email: data.user.email,
        photoURL: data.user.photoURL,
        displayName: data.user.displayName,
        uid: data.user.uid
      };
      window.localStorage.setItem('currentuser', JSON.stringify(currentuser));
      console.log(window.localStorage.getItem('currentuser'));
      this.navCtrl.setRoot(TabsPage);
    });
  }

  loginWithFacebook() {
    this.authProvider.signInWithFacebook().then((data) => {
      console.log('Login success ' + JSON.stringify(data));
      let currentuser = {
        email: data.user.email,
        photoURL: data.user.photoURL,
        displayName: data.user.displayName,
        uid: data.user.uid
      };
      window.localStorage.setItem('currentuser', JSON.stringify(currentuser));
      console.log(window.localStorage.getItem('currentuser'));
      this.navCtrl.setRoot(TabsPage);
    });
  }

  loginWithTwitter() {
    this.authProvider.signInWithTwitter().then((data) => {
      console.log('Login success ' + JSON.stringify(data));
      let currentuser = {
        email: data.user.email,
        photoURL: data.user.photoURL,
        displayName: data.user.displayName,
        uid: data.user.uid
      };
      window.localStorage.setItem('currentuser', JSON.stringify(currentuser));
      console.log(window.localStorage.getItem('currentuser'));
      this.navCtrl.setRoot(TabsPage);
    });
  }
}
