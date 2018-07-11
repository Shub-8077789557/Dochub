import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NewsletterViewService} from './../../../../shared_services/newsletter-view/newsletter-view.service';
@Component({
  selector: 'app-adminnewsletter-view',
  template: `<div class="mat-dialog-content"><div [innerHtml]="markup | adminviewSanitize"></div></div>`,

  // templateUrl: './newsletter-view.component.html',
   styles: [`
.mat-dialog-content {
    overflow: initial !important;
    text-align:center;
}
`]
})
export class AdminnewsletterViewComponent implements OnInit {
   id;
   markup:string;
  constructor(public dialogRef: MatDialogRef<AdminnewsletterViewComponent>,
   private newsletterview :  NewsletterViewService,@Inject(MAT_DIALOG_DATA) public data: any) {
    this.id = data.id;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit() {
    let response;
    let body;
  const newsletterid = {
    _id:this.id
  };
  console.log(newsletterid._id);
  this.newsletterview.NewsLetterView(newsletterid).subscribe((data:any)=>(response = data),
error => () =>{},
 () => {
  body = response.body;
  console.log(body);
  this.markup = JSON.parse(JSON.stringify(body.NewsLetter.markup)).replace(/\\/g,"")
console.log(this.markup); 
})
  }

}
