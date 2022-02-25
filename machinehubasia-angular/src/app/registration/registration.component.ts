import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudHttpService } from '../crud-http.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  model: any = {};
  todoList: any = [];
  userData: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private crudHttpService: CrudHttpService
  ) {}

  ngOnInit(): void {
    this.listTodo;
  }
  listTodo() {
    console.log('userData', this.userData);
    let data = {
      display_name: this.userData.display_name,
      user_email: this.userData.user_email,
      password: this.userData.password,
      tnc: this.userData.tnc,
    };
    console.log('data', data);

    this.crudHttpService
      .postData(
        'mharoutes/register',
        data,
        'post',
        'https://www.machinehubasia.com/api/wp-json/'
      )
      .subscribe(
        (response) => {
          console.log('response_@', response);
          if (response.error === false) {
            alert(
              'Registration successful. Please check your email for verification link.'
            );
          } else {
            alert('User already exists with');
          }
          this.todoList = response;
        },
        (error) => {}
      );
  }

  onSubmit(i: any) {
    console.log(i);
    this.userData = i;
    console.log('resgistration', this.userData);
    this.listTodo();
  }
  register() {}
}
