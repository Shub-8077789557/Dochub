import { Component, OnInit,ViewContainerRef } from '@angular/core';
import {StructureViewService} from './../../../../shared_services/StructureView/structure-view.service';
import {EditStructureService} from './../../../../shared_services/EditStructure/edit-structure.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators,FormsModule } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { LoginService } from './../../../../shared_services/login/login.service';
@Component({
  selector: 'app-edit-structure',
  templateUrl: './edit-structure.component.html',
  styleUrls: ['./edit-structure.component.scss']
})
export class EditStructureComponent implements OnInit {
  _id : string;
  structurename;
  structuremarkup;
  value;
  nav;

  constructor(private structview : StructureViewService, private editstruct : EditStructureService,public uroute: Router, 
    public toaster: ToastsManager, public vcr: ViewContainerRef,private user: LoginService,private route: ActivatedRoute) {
      this.toaster.setRootViewContainerRef(vcr);
     }

     form4 = new FormGroup({
      structuremarkup: new FormControl(''),
    });

  ngOnInit() {
    this._id = this.route.snapshot.params['_id'];
    let response;
    let body;
    const newsletterid = {
      _id : this._id
    }
    this.structview.StructureView(newsletterid).subscribe((data:any)=>(response = data),
    
  error => ()=>{},
()=> {
    body = response.body;
    this.value = body.Structure.StructureName;
   
    //this.form4.controls['structuremarkup'].setValue(this.structuremarkup);
    this.structuremarkup = JSON.parse(JSON.stringify(body.Structure.StructureMarkup)).replace(/\\/g, "")
        this.form4.controls['structuremarkup'].setValue(this.structuremarkup);
    console.log(body);
})
  }

  StructureSave(structurename){
    if (structurename === '') {
      this.toaster.error('Please Enter Structure Name', 'Oops!');
    } else {
      let response;
      let body;
      const username = this.user.getUser().user.username;
      const structuremarkup = JSON.stringify(this.form4.controls['structuremarkup'].value).replace(/^"/, "").replace(/"$/, "");
      const structsave = {
        _id : this._id,
        createdby : atob(username).toString(),
        structurename : structurename,
        structuremarkup : structuremarkup
      }
  
      this.editstruct.EditStructure(structsave).subscribe((data : any)=>(response = data),
     error =>()=>{},
    ()=> {
      body = response.body;
      console.log(response);
      if(typeof body.success == typeof true){
        this.toaster.success('Structure saved Successfully', 'success!!');
        this.nav = setTimeout(()=> this.uroute.navigate(['dashboard/structurelist']), 3000);
      } else {
        this.toaster.error("Please try again later", "Oops!!")
      }
    })
  
    }
    

  }


}
