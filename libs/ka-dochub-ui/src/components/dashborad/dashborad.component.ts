import { Component, OnInit } from '@angular/core';
import { GetroleService } from '../../../shared_services/get_role/getrole.service';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.scss']
})
export class DashboradComponent implements OnInit {
  public flag = false; //user
  role;
  constructor(public getrole:GetroleService) { }

  ngOnInit() {
  this.checkrole();

  }

  checkrole(){
    this.role = this.getrole.checkrole().role
    if(this.role.role === "admin"){
    this.flag = true;
    }
    return this.flag; 
  }



}
