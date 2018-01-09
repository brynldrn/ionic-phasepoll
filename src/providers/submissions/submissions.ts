import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SubmissionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SubmissionsProvider {

  data: any;

  constructor(public http: HttpClient) {
    this.data = null;
    console.log('Hello SubmissionsProvider Provider');
  }

  getAllSubmissions() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {

      this.http.get('http://192.168.0.2:4000/api/v1/submissions')
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  addNewSubmission(submission_item) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    this.http.post('http://192.168.0.2:4000/api/v1/submissions', submission_item, {headers: headers})
    .subscribe(res => {
      console.log(res);
    })
  }

}
