import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Map, latLng, tileLayer, Layer, marker, icon } from 'leaflet';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  map: mapboxgl.Map;

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    // In setView add latLng and zoom
    this.map = new Map('map').setView([5.5710605, 95.3702474], 100);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '',
    }).addTo(this.map);

    marker([5.5715425, 95.3711706]).addTo(this.map)
      .bindPopup('Nasi Goreng Bang Jali')
      .openPopup();

  }

  ionViewWillLeave() {
    this.map.remove();
  }

}
