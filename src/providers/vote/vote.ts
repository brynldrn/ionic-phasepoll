import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the VoteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VoteProvider {

  submission_entry: any;

  constructor(public http: HttpClient) {
    console.log('Hello VoteProvider Provider');
  }

  addNewVote(vote_item) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    this.http.post('http://192.168.0.2:4000/api/v1/vote', vote_item, { headers: headers })
      .subscribe(res => {
        console.log(res);
      })
  }

  findVoteByEntryId(voted_entry) {

    return new Promise(resolve => {

      this.http.get('http://192.168.0.2:4000/api/v1/vote/?id=' + voted_entry)
        .subscribe(data => {
          this.submission_entry = data;
          resolve(this.submission_entry);
        });
    });

  }

}
