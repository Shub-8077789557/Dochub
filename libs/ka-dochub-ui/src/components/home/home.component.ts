import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../shared_services';
import { GetroleService } from '../../../shared_services/get_role/getrole.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public flag = false;
  role;

  constructor(public getrole:GetroleService) {}

  ngOnInit() {
    this.checkrole();
   
  }
  checkrole(){
    this.role = this.getrole.checkrole().role
    if(this.role.role === "admin"){
    this.flag = true;
    }
    console.log(this.flag);
    return this.flag; 
  }



}
