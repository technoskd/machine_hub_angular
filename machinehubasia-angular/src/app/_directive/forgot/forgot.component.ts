import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CrudHttpService } from 'src/app/crud-http.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css'],
})
export class ForgotComponent implements OnInit {
  model: any = {};
  userData: any = {};
  todoList: any = [];
  constructor(
    private crudHttpService: CrudHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.todoList;
  }
  listTodo() {
    console.log('userData', this.userData);

    let data = {
      user_email: this.userData.email,
    };
    console.log('data', data);

    this.crudHttpService
      .postData(
        'forgot-password',
        data,
        'post',
        'https://www.machinehubasia.com/api/wp-json/mharoutes/'
      )
      .subscribe(
        (response) => {
          console.log('reset_response', response);

          this.todoList = response;
        },
        (error) => {}
      );
  }

  resetPassword(i: any) {
    console.log(i);
    this.userData = i;
    this.listTodo();
  }
  onSubmit(i: any) {}

  login() {}
}
