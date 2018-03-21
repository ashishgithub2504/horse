import {Component} from '@angular/core';
import {Config, NavController} from 'ionic-angular';
import {PropertyService} from '../../providers/property-service-mock';
import {PropertyDetailPage} from '../property-detail/property-detail';
import { Http } from '@angular/http';
import leaflet from 'leaflet';
import 'rxjs/add/operator/map';

@Component({
    selector: 'page-property-list',
    templateUrl: 'property-list.html'
})
export class PropertyListPage {

    properties: Array<any>;
    filterdata: Array<any>;
    searchKey: string = "";
    viewMode: string = "list";
    map;
    markersGroup;

    constructor(public navCtrl: NavController, public http: Http , public service: PropertyService, public config: Config) {
		this.findAll();
		
    }

    openPropertyDetail(property: any) {
		console.log(property);
        this.navCtrl.push(PropertyDetailPage, property);
    }

    onInput(event) {
		
		let key: string = this.searchKey.toUpperCase();
    this.properties = this.filterdata.filter((property: any) => (property.name).toUpperCase().indexOf(key) > -1);
		
        // this.service.findByName(this.searchKey)
            // .then(data => {
				// console.log(data);
                // this.properties = data;
                // if (this.viewMode === "map") {
                   // this.showMarkers();
                // }
            // })
            // .catch(error => alert(JSON.stringify(error)));
    }

    onCancel(event) {
		this.findAll();
    }

    findAll() {
		// this.http.get('http://localhost/horse/api/horses/index').map(res => res.json()).subscribe(
			// data => {
				// this.properties = data.data;
				// this.filterdata = data.data;
			// }
		// );
	
	this.service.findAll()
     .subscribe(
       data => {
		   this.properties = data.data;
		   this.filterdata = data.data;
         // set success message and pass true paramater to persist the message after redirecting to the login page
       },(error: any) => {
         
       });
	   
        // this.service.findAll()
            // .then(data => this.properties = data)
            // .catch(error => alert(error));
    }

    // showMap() {
        // setTimeout(() => {
            // this.map = leaflet.map("map").setView([42.361132, -71.070876], 14);
            // leaflet.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                // attribution: 'Tiles &copy; Esri'
            // }).addTo(this.map);
            // this.showMarkers();
        // })
    // }

    // showMarkers() {
        // if (this.markersGroup) {
            // this.map.removeLayer(this.markersGroup);
        // }
        // this.markersGroup = leaflet.layerGroup([]);
        // this.properties.forEach(property => {
            // if (property.lat, property.long) {
                // let marker: any = leaflet.marker([property.lat, property.long]).on('click', event => this.openPropertyDetail(event.target.data));
                // marker.data = property;
                // this.markersGroup.addLayer(marker);
            // }
        // });
        // this.map.addLayer(this.markersGroup);
    // }

}
