import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-places-details',
  templateUrl: './places-details.component.html',
  styleUrls: ['./places-details.component.scss'],
})
export class PlacesDetailsComponent implements OnInit {
  @Input() data: any = null;

  constructor() {}

  ngOnInit(): void {}
}
