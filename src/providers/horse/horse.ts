import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import properties from '../mock-properties';
import 'rxjs/add/operator/map';

/*
  Generated class for the HorseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HorseProvider {
	horses: Array<any> = [];
  constructor(public http: Http) {
    console.log('Hello HorseProvider Provider');
  }

  findAll(){
	  this.http.get('http://localhost/horse/api/horses/index').map(res => res.json()).subscribe(
			(data) => {
				console.log(data.data);
				return Promise.resolve(data.data);	
			}
		);
		return Promise.resolve(properties);
  }
}
