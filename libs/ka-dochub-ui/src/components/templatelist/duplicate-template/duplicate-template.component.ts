import { Component, OnInit, Inject , ViewContainerRef} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {DuplicateTemplateService} from './../../../../shared_services/DupliacteTemplate/duplicate-template.service';
@Component({
  selector: 'app-duplicate-template',
  templateUrl: './duplicate-template.component.html',
  styleUrls: ['./duplicate-template.component.scss']
})
export class DuplicateTemplateComponent implements OnInit {
   id;
  constructor(private dupliacteTemp:DuplicateTemplateService, private vcr : ViewContainerRef,
     @Inject(MAT_DIALOG_DATA)public data:any, private toaster : ToastsManager, private dialogRef : MatDialogRef<DuplicateTemplateComponent>) {
      this.id = data.id;
      this.toaster.setRootViewContainerRef(vcr);
      }

      onNoClick():void{
        this.dialogRef.close();
      }

  ngOnInit() {
  }

  duplicateTemplateRow(){
    let response;
    let body;
    const templateid = {
      _id : this.id
    }

    this.dupliacteTemp.DuplicateTemplate(templateid).subscribe((data:any)=>(response=data),
  error =>()=>{},
()=> {
  body = response.body;
  console.log(body);
  if(typeof body.success == typeof true){
    this.toaster.success("Template Copied successfully!", "Success");
  } else {
    this.toaster.error("Please try agian.", "Oops!!");
  }
})
this.dialogRef.close();
  }
}
