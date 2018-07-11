import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { UserRegisterService } from '../../../shared_services';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr';
import { RoleService } from '../../../shared_services';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  private _RegisterForm = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  Name: String;
  Username: String;
  Email: String;
  Password: String;
  Role: any;
  Read = false;
  Write = false;
  Delete = false;
  roles: any;
  access: any;


  constructor(
    private vcr: ViewContainerRef,
    private _register: UserRegisterService,
    public router: Router,
    public _toaster: ToastsManager,
    private _role: RoleService
  ) {
    this._toaster.setRootViewContainerRef(vcr);
  }

  ngOnInit() {

    let response: any;
    let body: any;
    this._role.getroles().subscribe((role: any) => (response = role), error => () => { },
      () => {
        body = response.body;
        this.roles = body.role;
        this.access = this.roles[0].access;
        console.log(this.access);
        console.log(this.roles);
      }

    );
  }
  onRegisterSubmit() {
    let response: any;
    let body: any;

    const User = {
      Name: btoa(this.Name.toString()),
      Username: btoa(this.Username.toString()),
      Email: btoa(this.Email.toString()),
      Password: btoa(this.Password.toString()),
      Role: {
        role:  this.Role,
        Access:
          {
            Read: this.Read,
            Write:this.Write,
            Delete: this.Delete
          }
      }
    };

    console.log(User);
    this._register.StoreUser(User).subscribe(
      (data: any) => (response = data),
      error => () => {},
      () => {
        body = response.body;
        if (typeof body.success === typeof true) {
          this._toaster.success('Registartion Successful', 'Success!');
          setInterval(() => this.router.navigate(['/login']), 8000);
        } else {
          this._toaster.error('Please Try Again Later', 'Oops!');
        }
      }
    );
  }


}
