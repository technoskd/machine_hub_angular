import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { CrudHttpService } from '../../crud-http.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent implements OnInit {
  todoList: any = [];
  todoLocation: any = [];
  todoMaker: any = [];
  todoSingle: any = [];
  todoListing: any = [];
  todosingle: any = [];
  todoNews: any = [];

  constructor(
    private crudHttpService: CrudHttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listTodos();
    this.locationData();
    this.makeAll();
    this.RecentsList();
    this.newsList();
    // console.log('rout', this.route.snapshot.paramMap.get('id'));
  }
  listTodos() {
    this.crudHttpService
      .fetchData(
        'taxonomy-equipments',
        { per_page: 100, orderby: 'name', exclude: 47 },
        'get',
        'https://www.machinehubasia.com/api/wp-json/wp/v2/'
      )
      .subscribe(
        (response) => {
          console.log('response', response);
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
          // console.log(response);

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
          // console.log(response);

          this.todoMaker = response;
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
          console.log('listing', response);
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
          this.todoNews = response;
        },
        (error) => {}
      );
  }

  onSubmit() {}
}
