import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-places-details',
  templateUrl: './places-details.component.html',
  styleUrls: ['./places-details.component.scss'],
})
export class PlacesDetailsComponent implements OnInit, OnChanges {
  @Input() data: any = null;
  tagsValues: string[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['data'].firstChange) {
      // console.log('cambios', changes['data'].currentValue);
      this.tagsValues = Object.values(changes['data']?.currentValue?.tags ?? []);
    }
  }

  ngOnInit(): void {}
}
