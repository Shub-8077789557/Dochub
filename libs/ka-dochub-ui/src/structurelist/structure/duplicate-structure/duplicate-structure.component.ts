import { Component, OnInit, Inject,ViewContainerRef } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DuplicateStructureService} from './../../../../shared_services/DuplicateStructure/duplicate-structure.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-duplicate-structure',
  templateUrl: './duplicate-structure.component.html',
  styleUrls: ['./duplicate-structure.component.scss']
})
export class DuplicateStructureComponent implements OnInit {
   id;
   nav;
  constructor(private duplicateStruct : DuplicateStructureService, private dialogRef : MatDialogRef<DuplicateStructureComponent>,
  @Inject(MAT_DIALOG_DATA)public data : any, private toaster : ToastsManager, private vcr:ViewContainerRef ){ 
    this.id = data.id;
    this.toaster.setRootViewContainerRef(vcr);
  }

  onNoClick():void{
    this.dialogRef.close();
  }
  ngOnInit() {
  }

  duplicateStructure(){
    let response;
    let body;
     const structureid ={
       _id : this.id
     }

     this.duplicateStruct.DuplicateStructure(structureid).subscribe((data:any)=>(response=data),
    error=> ()=>{},
  ()=>{
    body = response.body;
    console.log(body);
    if(typeof body.success == typeof true){
      this.toaster.success("Structure is Copied Successfully!!", "Success");
    } else {
      this.toaster.error("Please try again", "Oops!!");

    }
  })
  this.dialogRef.close();
  }

}
