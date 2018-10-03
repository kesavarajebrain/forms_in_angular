import { Component } from '@angular/core';
import {User} from '../../src/assets/data/displaydata'
import { PostdataService} from '../../src/app/postdata.service'
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public studentdata =[];
  title = 'app';
  topics = ['Angular','Ionic','Express Js', 'React Js', 'Vue'];
  userdetails = new User('Kesava', 'kesav@test.com', 9566994840, 'choose', 'day', true);
  topicHasError = true;
 submitted = false;
errormsg ='';
  constructor( private post:PostdataService, private material:MatFormFieldModule) {}

// str = "Ebrain technologies located in tanjore they are doing software development";
// d_matches = this.str.match(/d/gi).length;
// e_matches = this.str.match(/e/gi).length;
// t_matches = this.str.match(/t/gi).length;
// o_matches = this.str.match(/o/gi).length;
  validateTopic(value) {
    if (value === 'choose') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  submitForm(){
    this.submitted = false;
    console.log(this.userdetails);
   this.post.postdata(this.userdetails)
   .subscribe(
     data => console.log('Success !',data),
    //  error => console.log('Error !',error)
    error => this.errormsg = error.statusText
   )
// console.log("D matches :" + this.d_matches + " Times");
// console.log("E matches :" + this.e_matches + " Times");
// console.log("T matches :" + this.t_matches + " Times");
// console.log("O matches :" + this.o_matches + " Times");
  }

  // btnclick() {
  // this.post.getdata()
  //   .subscribe(data=>this.studentdata = data,
  //               error => this.errormsg = error);
  //               console.log(this.studentdata);
  // }
 

}