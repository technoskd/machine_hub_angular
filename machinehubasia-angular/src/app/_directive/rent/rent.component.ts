import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css'],
})
export class RentComponent implements OnInit {
  model: any = {};

  constructor() {}

  ngOnInit(): void {}
  onSubmit(i: any) {
    console.log(i);
  }
}
