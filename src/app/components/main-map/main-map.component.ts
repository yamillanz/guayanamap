import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const DEFAULT_LAT: number = 8.29067;
const DEFAULT_LOG: number = -62.652159;
const DEFAULT_ZOOM: number = 10;
const PLUS_ZOOM: number = 4;

@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.scss'],
})
export class MainMapComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() LAT: number = DEFAULT_LAT;
  @Input() LOG: number = DEFAULT_LOG;

  private centroid: L.LatLngExpression = [DEFAULT_LAT, DEFAULT_LOG];
  private map: L.Map = {} as L.Map;

  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: DEFAULT_ZOOM,
    });

    this.map;
    let iconDefault = L.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41],
    });
    L.Marker.prototype.options.icon = iconDefault;

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    });
    tiles.addTo(this.map);

    // Array(5)
    //   .fill(this.centroid)
    //   .map((x) => [x[0] + (Math.random() - 0.5) / 10, x[1] + (Math.random() - 0.5) / 10])
    //   .map((x) => L.marker(x as L.LatLngExpression))
    //   .forEach((x) => x.addTo(this.map));
  }

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    const changesCity = changes['LAT'] && changes['LOG'] && !changes['LAT'].firstChange;
    if (changesCity) {
      console.log('mapa', changes['LAT']);
      const placeLT = new L.LatLng(changes['LAT'].currentValue, changes['LOG'].currentValue);
      this.map.setView(placeLT, DEFAULT_ZOOM + PLUS_ZOOM * 1.20, {
        animate: true,
      });
      L.marker(placeLT).addTo(this.map);
    }
  }

  ngAfterViewInit(): void {
    this.initMap();
    // console.log('coorde', this.LAT, this.LOG);
  }

  ngOnInit(): void {
    // this.initMap();
  }
}
