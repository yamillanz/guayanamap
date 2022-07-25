import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

interface City {
  name: string;
  coordinates: string;
}

@Component({
  selector: 'app-places-select',
  templateUrl: './places-select.component.html',
  styleUrls: ['./places-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacesSelectComponent implements OnInit {
  cities: City[] = [];

  @Output() coorsSelected: EventEmitter<number[]> = new EventEmitter<
    number[]
  >();

  constructor() {}

  ngOnInit(): void {
    this.cities = [
      { name: 'Caracas', coordinates: '10.491,-66.902' },
      { name: 'Puerto Ordaz', coordinates: '8.29806,-62.71861' },
      { name: 'Margarita', coordinates: '8.29806,-62.71861' },
    ];
  }

  select_ciudad(event: any) {
    // console.log('valor', event.value);
    const coord = (event.value as string).split(',');
    const coordNumbers = coord.map((coor) => parseFloat(coor));
    this.coorsSelected.emit(coordNumbers);
    // console.log('tranas', this.coorsSelected);
  }
}
