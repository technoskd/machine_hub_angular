import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { CrudHttpService } from '../../crud-http.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css'],
})
export class SingleComponent implements OnInit {
  model: any = {};
  todoList: any = [];
  gallery: any = {};

  id: any = [];

  constructor(
    private crudHttpService: CrudHttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.getListId();
  }

  getListId() {
    let text = `${this.route.snapshot.paramMap.get('id')}`;
    console.log('text', typeof text);

    const myArray = text.split('-');
    let sin = myArray[myArray.length - 1];
    // console.log('typeof ', sin[2]);

    this.crudHttpService
      .fetchData(
        `mha-listings/${sin}`,
        {},
        'get',
        'https://www.machinehubasia.com/api/wp-json/wp/v2/'
      )
      .subscribe(
        (response) => {
          console.log('response1111', response);
          this.todoList = response;
          this.gallery = response.gallery;
          console.log('this.gallery', this.gallery);
        },
        (error) => {}
      );
  }

  onSubmit(i: any) {}
  login() {}
}
