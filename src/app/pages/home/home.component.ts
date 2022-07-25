import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  latitudSelected: number = 0;
  longitudSelected: number = 0;

  ngOnInit(): void {}

  coordHandler(event: any) {
    this.latitudSelected = event[0];
    this.longitudSelected = event[1];
  }
}
