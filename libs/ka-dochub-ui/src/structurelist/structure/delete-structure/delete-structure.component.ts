import { Component, OnInit , Inject ,ViewContainerRef} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DeleteStructureService} from './../../../../shared_services/StructureDelete/delete-structure.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-delete-structure',
  templateUrl: './delete-structure.component.html',
  styleUrls: ['./delete-structure.component.scss']
})
export class DeleteStructureComponent implements OnInit {
  id;
  constructor(private dialogRef : MatDialogRef<DeleteStructureComponent>, private delStruct:DeleteStructureService,
  private toaster : ToastsManager, @Inject(MAT_DIALOG_DATA)public data : any, private vcr: ViewContainerRef) { 
  this.id = data.id;
  this.toaster.setRootViewContainerRef(vcr);
  }
   
  onNoClick():void{
    this.dialogRef.close();
  }
  ngOnInit() {
  }

  deleteStructure(){
    let response;
    let body;
    const structureid = {
      _id : this.id
    }
   
    this.delStruct.DeleteStructure(structureid).subscribe((data:any)=>(response = data),
  error =>()=>{},
()=> {
    body = response.body;
    console.log(body);
    if(typeof body.success == typeof true){
      this.toaster.success("Structure deleted Successfully!!", "Success");
    } else {
      this.toaster.error("Please try again", "Oops!")
    }
})
 this.dialogRef.close();
  }

}

