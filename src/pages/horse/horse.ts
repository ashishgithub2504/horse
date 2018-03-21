import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { HorseProvider } from '../../providers/horse/horse';
import 'rxjs/add/operator/map';
/**
 * Generated class for the HorsePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 @Component({
  selector: 'page-horse',
  templateUrl: 'horse.html',
})
export class HorsePage {
	
	horses: Array<any>;
	
  constructor(public navCtrl: NavController, public navParams: NavParams , public horseprovider: HorseProvider, public http: Http) {
	  this.findAll();
  }

  findAll() {
	  this.http.get('http://localhost/horse/api/horses/index').map(res => res.json()).subscribe(
			(data) => {
				this.horses = data.data;	
			}
		);
		
	  // this.horseprovider.findAll()
            // .then(data =>{
				// this.horses = data;
			// })
            // .catch(error => alert(error));
  }
}
