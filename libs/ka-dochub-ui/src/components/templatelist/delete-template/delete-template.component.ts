import { Component, OnInit, Inject, ViewContainerRef } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {TemplateDeleteService} from './../../../../shared_services/TemplateDelete/template-delete.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-delete-template',
  templateUrl: './delete-template.component.html',
  styleUrls: ['./delete-template.component.scss']
})
export class DeleteTemplateComponent implements OnInit {
   id;
  constructor(public dialogRef: MatDialogRef<DeleteTemplateComponent>,private tempDel : TemplateDeleteService,
  @Inject(MAT_DIALOG_DATA)public data: any, private toaster :ToastsManager, public vcr :ViewContainerRef ) { 
    this.id = data.id;
    this.toaster.setRootViewContainerRef(vcr);   
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {

  }

  deleteTemplateRow(){
    let response;
    let body;
    const templateid = {
      _id:this.id
    };
      
    this.tempDel.DeleteTemplate(templateid).subscribe((data:any)=> (response = data),
  (error)=>()=>{ },
  ()=> {
    body = response.body;
    console.log(body);
    if (typeof body.success === typeof true) {
      this.toaster.success('Template Deleted', 'Success!!');
    } else {
      this.toaster.error('Template is still not deleted.', 'Oops!!');
    }
  })
  this.dialogRef.close();
  }

}
