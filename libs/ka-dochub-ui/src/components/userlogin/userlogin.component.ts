import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { LoginService } from '../../../shared_services';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {
  hide = true;
  public LoginFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  username: String;
  password: String;

  constructor(
    private router: Router,
    public toaster: ToastsManager,
    vcr: ViewContainerRef,
    private loginservice: LoginService
  ) {
    this.toaster.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.toaster.info('Welcome To Dochub');
  }

  onloginSubmit() {
    let response: any;
    let body: any;
    console.log();
    const user = {
      username: btoa(this.username.toString()),
      password: btoa(this.password.toString())
    };

    this.loginservice.login(user).subscribe(
      (data: any) => (response = data),
      error => () => {},
      () => {
        body = response.body;
        console.log(response);
        if (body.token) {
          this.loginservice.SetUser(body.token, body.user);
           this.router.navigate(['dashboard']);
        } else {
          this.toaster.error('Invalid Username or Password', 'Oops!');
        }
      }
    );
  }
  goto() {
    this.router.navigate(['register']);
  }
}
