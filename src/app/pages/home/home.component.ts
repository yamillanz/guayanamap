import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataMapService } from 'src/app/services/data-map/data-map.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  latitudSelected: number = 0;
  longitudSelected: number = 0;
  dataPlace: Observable<any> = new Observable();

  constructor(private mapService: DataMapService) {}

  ngOnInit(): void {}

  coordHandler(event: any) {
    console.log(event);
    this.mapService.getInfoFromNominaTim(event).subscribe((data) => {
      const { geojson, ...restData } = data[0];
      console.log(restData);
    });
    // this.latitudSelected = event[0];
    // this.longitudSelected = event[1];
  }
}
