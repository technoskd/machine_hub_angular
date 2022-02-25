import { Component, OnInit } from '@angular/core';
import { CrudHttpService } from '../../crud-http.service';
// import { FatchData } from '../../utile/service';

@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.css'],
})
export class HearderComponent implements OnInit {
  d: any = [];
  todoList: any = [];
  constructor(private crudHttpService: CrudHttpService) {}

  ngOnInit(): void {
    this.listTodos();
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
          console.log('home_equriment', response);

          this.todoList = response;
        },
        (error) => {}
      );
  }
}
