import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { URLSearchParams } from "@angular/http"
import 'rxjs/add/operator/map';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  posts: any;
 
 
  constructor(public navCtrl: NavController, public http: Http,public alertCtrl: AlertController) {
 
 
  }
      
    
 postCall(){
	 /*
	 let username: string = 'admin';
      let password: string = 'district';
      let headers: Headers = new Headers();
      //headers.append("authorization", "Basic " + btoa(username + ":" + password)); 
	  //headers.append("Authorization", base_64_encode('dilroop' + ':' + 'Dilroop@123')); 
	  let auth = "Basic " + new Buffer('dilroop' + ":" + 'Dilroop@123').toString("base64");
      headers.append("Content-Type", "application/x-www-form-urlencoded");
      return this._http.post('http://139.162.61.147:29016/intpart/api/dataElementGroupSets', auth,headers).subscribe(data => {
                alert('ok');
				console.log(data);
          });
		  */
		  let headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Authorization', 'Basic' + btoa('admin' + ":" + 'district'));

let options = new RequestOptions({ headers: headers });

this.http.get("http://139.162.61.147:29016/intpart/api/dataElementGroupSets",{ headers: headers }).subscribe(data => {
     alert('ok');
				console.log(data);
 
 });
 }	
  
}