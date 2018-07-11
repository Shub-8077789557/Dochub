import { Component, OnInit, Inject,ViewContainerRef } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { NewsletterdeleteService } from '../../../../../shared_services/NewsletterDelete/newsletterdelete.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {Element} from './../../../create-newsletter/components/newsletter-data/Element';
import {NewsletterDataComponent} from './../newsletter-data/newsletter-data.component';
@Component({
  selector: 'app-delete-newsletter',
  templateUrl: './delete-newsletter.component.html',
  styleUrls: ['./delete-newsletter.component.scss']
})
export class DeleteNewsletterComponent implements OnInit {
   id;
    constructor(public vcr:ViewContainerRef,public dialogRef: MatDialogRef<DeleteNewsletterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private deletNewsletter: NewsletterdeleteService,public toaster: ToastsManager) {
      this.id = data.id;    
      this.toaster.setRootViewContainerRef(vcr);    
     }
   
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
   
  }
   
  
  removeSelectedRows() {
    let response;
    let body;
  const newsletterid = {
    _id:this.id
  };
     console.log(newsletterid._id);

    this.deletNewsletter.DeleteNewsLetter(newsletterid)
    .subscribe((data: any) => (response = data),
      error => () => { },
     () => {
        body = response.body;
        console.log(body);
          if (typeof body.success === typeof true) {
            this.toaster.success('NewsLetter Deleted', 'Success!!');
          } else {
            this.toaster.error('Newsletter is still not deleted.', 'Oops!!');
          }
     }
   );
   this.dialogRef.close();
 
  }
}
