import { AngularFireAuth } from 'angularfire2/auth';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireModule } from 'angularfire2';
import { HttpClientModule } from '@angular/common/http';
import { LoginPage } from '../pages/login/login';
import { PollPage } from '../pages/poll/poll';
import { SubmitPage } from '../pages/submit/submit';
import { ProfilePage } from '../pages/profile/profile';
import { SubmissionsProvider } from '../providers/submissions/submissions';
import { VoteProvider } from '../providers/vote/vote';


// Initialize Firebase
const config = {
  apiKey: "AIzaSyCPMr53pLdPKi8J3xQmU3w2lTD0LHuEhno",
  authDomain: "phasepoll.firebaseapp.com",
  databaseURL: "https://phasepoll.firebaseio.com",
  projectId: "phasepoll",
  storageBucket: "phasepoll.appspot.com",
  messagingSenderId: "826335577729"
};


@NgModule({
  declarations: [
    MyApp,
    PollPage,
    SubmitPage,
    ProfilePage,
    TabsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PollPage,
    SubmitPage,
    ProfilePage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AngularFireAuth,
    HttpClientModule,
    SubmissionsProvider,
    VoteProvider
  ]
})
export class AppModule {}
