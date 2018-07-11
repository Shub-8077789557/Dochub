import { Component,ViewContainerRef, OnInit } from '@angular/core';
import { RoleService, UserRegisterService,RoleupdationService } from '../../../shared_services';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.scss']
})
export class CreateuserComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private vcr: ViewContainerRef,
    private _register: UserRegisterService,
    private _usersupdation:RoleupdationService,
    public router: Router,
    public _toaster: ToastsManager,
    private _role: RoleService) { }
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
  users:any;
  SelectedUser: String;

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    let response: any;
    let body: any;
    this._role.getroles().subscribe((role: any) => (response = role), error => () => { },
      () => {
        body = response.body;
        this.roles = body.role;
        this.access = this.roles[0].access;
      }

    );

    this.getusers();

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
 
    getusers(){
      let response:any;
      let body:any;
     
      this. _usersupdation.getusers().subscribe((data:any)=>(response=data),
    error=>()=>{},()=>{
      body=response.body;
    this.users=body.User;
    console.log(this.users);
    });
    }

    checkuser(){
      const selecteduser = this.SelectedUser;
      let userroles: any;
   //  let useraccess: any;
      console.log(selecteduser);
    this.users.forEach(function(item){
      console.log(item);
      if(item.name === selecteduser){
        userroles = item.role.role;
        console.log(userroles);
            }
    });
    }
   
}
