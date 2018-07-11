import { Component, OnInit , Inject,ViewContainerRef} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NewsletterDuplicateService } from './../../../../../shared_services/newsletter-duplicate/newsletter-duplicate.service';
import { Element } from './../../components/newsletter-data/Element';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-duplicate-newsletter',
  templateUrl: './duplicate-newsletter.component.html',
  styleUrls: ['./duplicate-newsletter.component.scss']
})
export class DuplicateNewsletterComponent implements OnInit {
   id;
   value;
   Newsletter;
   ELEMENT_DATA: Element[] = [];
   dataSource = new MatTableDataSource<Element>(this.ELEMENT_DATA);
  constructor(public vcr:ViewContainerRef,public toaster: ToastsManager,public dialogRef: MatDialogRef<DuplicateNewsletterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private duplicate : NewsletterDuplicateService) {
      this.id = data.id;
      this.value =data.name;
      this.toaster.setRootViewContainerRef(vcr);
      console.log(this.value);
     }

    onNoClick(): void {
      this.dialogRef.close();
    }
      ngOnInit() {


  }

  NewsletterCopied(newslettername){
    console.log(newslettername);
    console.log( this.data.name);
  if(newslettername === this.data.name)
  {
      this.toaster.error('Please Enter New Name','Oops!')
  }
  else{
    let response;
    let body;
   const newsletter = {
    _id:this.id,
    documentname:newslettername
  };
     console.log(newsletter);
     this.duplicate.DuplicateNewsLetter(newsletter)
     .subscribe((data: any) => (response = data),
       error => () => { 
       },()=>{
        body = response.body;
        console.log(response);
        if (typeof body.success === typeof true) {
          this.toaster.success('NewsLetter Duplicated Succeesfully', 'Success!');
       } else {
      this.toaster.error('Please Try Again Later', 'Oops!');
        }
       }
     );
     this.dialogRef.close();
    }
  }

}
