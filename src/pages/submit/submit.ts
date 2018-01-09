import { Component, ElementRef, HostListener } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SubmissionsProvider } from '../../providers/submissions/submissions';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/**
 * Generated class for the SubmitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-submit',
  templateUrl: 'submit.html',
})
export class SubmitPage {
  @HostListener('input', ['$event.target'])
  onInput(textArea: HTMLTextAreaElement): void {
    this.adjust();
  }

  catch_phrase: String;
  createor: String = window.localStorage.getItem('currentuser');

  constructor(public navCtrl: NavController, public navParams: NavParams, public element: ElementRef, private submissionProvider: SubmissionsProvider,
              public alertCtrl: AlertController) {
                this.catch_phrase = null;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubmitPage');
  }


  adjust(): void {
    let textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
    textArea.style.overflow = 'hidden';
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + "px";
  }

  submit(): void {
    if (this.catch_phrase == null) {
      let alert = this.alertCtrl.create({
        title: 'Error!',
        subTitle: 'Please don\'t leave the Catch Phrase entry blank!',
        buttons: ['OK']
      });
      alert.present();
    } else {
      let submission_item = {
        catch_phrase: this.catch_phrase,
        creator: this.createor
      }

      this.submissionProvider.addNewSubmission(submission_item);
      let alert = this.alertCtrl.create({
        title: 'Success!',
        subTitle: 'Your entry has been successfully submitted',
        buttons: [{
          text: 'OK',
          role: 'OK',
          handler: data => {
            this.catch_phrase = null;
            window.location.reload();
          }
        }]
      });
      alert.present();
    }
  }

}
