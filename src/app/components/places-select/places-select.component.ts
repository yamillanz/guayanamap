import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

interface City {
  name: string;
  coordinates?: string;
  criteria?: string;
}

@Component({
  selector: 'app-places-select',
  templateUrl: './places-select.component.html',
  styleUrls: ['./places-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacesSelectComponent implements OnInit {
  cities: City[] = [];

  // @Output() coorsSelected: EventEmitter<number[]> = new EventEmitter<
  //   number[]
  // >();
  @Output() coorsSelected: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {
    this.cities = [
      { name: 'Caracas', criteria: 'Caracas' },
      { name: 'Puerto Ordaz', criteria: 'Puerto Ordaz' },
      { name: 'Margarita', criteria: 'Margarita' },
    ];
  }

  select_ciudad(event: any) {
    // console.log('valor', event.value);
    const coord = (event.value as string).split(',');
    const coordNumbers = coord.map((coor) => parseFloat(coor));
    this.coorsSelected.emit(event.value);
    // console.log('tranas', this.coorsSelected);
  }
}
