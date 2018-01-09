import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SubmissionsProvider } from '../../providers/submissions/submissions';
import { VoteProvider } from '../../providers/vote/vote';

/**
 * Generated class for the PollPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-poll',
  templateUrl: 'poll.html',
})
export class PollPage {

  submissions: any;
  voted_entry: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private submissionsProvider: SubmissionsProvider, private voteProvider: VoteProvider) {
    this.loadSubmissions();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PollPage');
    this.loadSubmissions();
  }

  loadSubmissions() {
    this.submissionsProvider.getAllSubmissions().then((data) => this.submissions = data);
  }

  voteThis(data): void {
    let vote_item = {
      creator: JSON.parse(window.localStorage.getItem('currentuser')).uid,
      voted_entry: data
    }

    this.voteProvider.findVoteByEntryId(data).then((res) => {
      this.voted_entry = res;
      if (this.voted_entry.length == 0) {
        this.voteProvider.addNewVote(vote_item);
      } else {
        console.log("Already Voted!");
      }
     });
  }

  selectVoted(): void {
  }

}
