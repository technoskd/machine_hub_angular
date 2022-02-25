import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CrudHttpService } from '../crud-http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userData: any = {};
  model: any = {};
  todoList: any = [];

  constructor(
    private crudHttpService: CrudHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listTodo;
  }

  listTodo() {
    console.log('userData', this.userData);

    let data = {
      email: this.userData.email,
      password: this.userData.password,
      tnc: this.userData.tnc,
    };

    this.crudHttpService
      .postData(
        'mharoutes/login',
        data,
        'post',
        'https://www.machinehubasia.com/api/wp-json/'
      )
      .subscribe(
        (response) => {
          if (response.error === false) {
            this.router.navigate(['deshboard'], { queryParams: this.model });
          } else {
            alert('Invalid login Username & Password');
          }
          this.todoList = response;
        },
        (error) => {}
      );
  }

  onSubmit(i: any) {
    console.log(i);
    this.userData = i;
    this.listTodo();
  }
  login() {}
}
