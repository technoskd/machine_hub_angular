import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CrudHttpService } from '../../crud-http.service';

@Component({
  selector: 'app-equiment',
  templateUrl: './equiment.component.html',
  styleUrls: ['./equiment.component.css'],
})
export class EquimentComponent implements OnInit {
  todoList: any = [];
  todoLocation: any = [];
  todoMaker: any = [];
  todoListing: any = [];
  todoNews: any = [];
  model: any = [];

  constructor(
    private crudHttpService: CrudHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listTodos();
    this.locationData();
    this.makeAll();
    this.RecentsList();
    this.newsList();
  }

  listTodos() {
    this.crudHttpService
      .fetchData(
        'taxonomy-equipments',
        { per_page: 16 },
        'get',
        'https://www.machinehubasia.com/api/wp-json/wp/v2/'
      )
      .subscribe(
        (response) => {
          console.log('response_equriment', response);
          this.todoList = response;
        },

        (error) => {}
      );
  }
  locationData() {
    this.crudHttpService
      .fetchData(
        'taxonomy-locations',
        { per_page: 100, exclude: 81 },
        'get',
        'https://www.machinehubasia.com/api/wp-json/wp/v2/'
      )
      .subscribe(
        (response) => {
          // console.log('location', response);
          this.todoLocation = response;
        },
        (error) => {}
      );
  }
  makeAll() {
    this.crudHttpService
      .fetchData(
        'taxonomy-makers',
        { per_page: 100 },
        'get',
        'https://www.machinehubasia.com/api/wp-json/wp/v2/'
      )
      .subscribe(
        (response) => {
          console.log('maker', response);

          this.todoMaker = response;
          console.log(' this.todoMaker', this.todoMaker);
        },
        (error) => {}
      );
  }
  RecentsList() {
    this.crudHttpService
      .fetchData(
        'mha-listings',
        { per_page: 15 },
        'get',
        'https://www.machinehubasia.com/api/wp-json/wp/v2/'
      )
      .subscribe(
        (response) => {
          this.todoListing = response;
        },
        (error) => {}
      );
  }
  newsList() {
    this.crudHttpService
      .fetchData(
        'posts',
        { per_page: 10 },
        'get',
        'https://www.machinehubasia.com/api/wp-json/wp/v2/'
      )
      .subscribe(
        (response) => {
          console.log('news', response);
          // response.filter(() => {});

          this.todoNews = response;
        },
        (error) => {}
      );
  }

  onSubmit(i: any) {
    console.log(i);
    this.router.navigate(['listing'], { queryParams: this.model });
  }
}
