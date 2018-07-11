import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StructureSaveService} from './../../../shared_services/Structuresave/structure-save.service';
import {LoginService} from './../../../shared_services/login/login.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {Router} from '@angular/router';
@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss']
})
export class StructureComponent implements OnInit {
   structsave;
   nav;
   structurename:string;
   
  constructor(private structure_save:StructureSaveService, private user:LoginService,
  private toaster : ToastsManager, private route : Router, private vcr : ViewContainerRef) {
    
    this.toaster.setRootViewContainerRef(vcr);
   }

  form4 = new FormGroup({
    structuremarkup: new FormControl(''),
  });
  
  ngOnInit() {
  }

  StructureSave(structurename:string){
    if (structurename === '') {
      this.toaster.error('Please Enter Structure Name', 'Oops!');
    } else {
      let response;
      let body;
      const username = this.user.getUser().user.username;
      const structuremarkup = JSON.stringify(this.form4.controls['structuremarkup'].value).replace(/^"/, "").replace(/"$/, "");
      this.structsave = {
        createdby : atob(username).toString(),
        structurename : structurename,
        structuremarkup : structuremarkup
      }
  
      this.structure_save.StructureSave(this.structsave).subscribe((data : any)=>(response = data),
     error =>()=>{},
    ()=> {
      body = response.body;
      console.log(response);
      if(typeof body.success == typeof true){
        this.toaster.success('Structure saved Successfully', 'success!!');
        this.nav = setTimeout(()=> this.route.navigate(['dashboard/structurelist']), 3000)
      } else {
        this.toaster.error("Please try again later", "Oops!!")
      }
    })
  
    }
    

  }

}
