import {Injectable} from '@angular/core';
import properties from './mock-properties';
import { Http ,Response, RequestOptions} from '@angular/http';
import leaflet from 'leaflet';
import 'rxjs/add/operator/map';

@Injectable()
export class PropertyService {

  favoriteCounter: number = 0;
  favorites: Array<any> = [];
	
	constructor( public http: Http) {
			console.log('Hello PropertyProvider Provider');
    }
	
  findAll() {
	return this.http.get('http://localhost/horse/api/horses/index')
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        return user;
      });
	  
  }

  findById(id) {
    return Promise.resolve(properties[id - 1]);
  }

  findByName(searchKey: string) {
    let key: string = searchKey.toUpperCase();
    return Promise.resolve(properties.filter((property: any) =>
        (property.title +  ' ' +property.address +  ' ' + property.city + ' ' + property.description).toUpperCase().indexOf(key) > -1));
  }

  getFavorites() {
    return Promise.resolve(this.favorites);
  }

  favorite(property) {
    this.favoriteCounter = this.favoriteCounter + 1;
    this.favorites.push({id: this.favoriteCounter, property: property});
    return Promise.resolve();
  }

  unfavorite(favorite) {
    let index = this.favorites.indexOf(favorite);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
    return Promise.resolve();
  }

}
