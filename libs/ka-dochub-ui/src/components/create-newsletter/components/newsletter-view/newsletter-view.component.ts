import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {NewsletterViewService} from '../../../../../shared_services/newsletter-view/newsletter-view.service';
@Component({
  selector: 'app-newsletter-view',
  template: `<div class="mat-dialog-content"><div [innerHtml]="HRmarkup | sanitize"></div><br>
  <div [innerHtml]="Amarkup | sanitize"></div><br><div [innerHtml]="Mrmarkup | sanitize"></div></div>`,

  // templateUrl: './newsletter-view.component.html',
   styles: [`
.mat-dialog-content {
    overflow: initial !important;
    text-align:center;
}
`]
})
export class NewsletterViewComponent implements OnInit {
  id;
  HRmarkup:string;
  Amarkup:string;
  Mrmarkup:string;
  constructor(public dialogRef: MatDialogRef< NewsletterViewComponent>,
  private newsletterview :NewsletterViewService,@Inject(MAT_DIALOG_DATA) public data: any) { 
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
  this.HRmarkup = JSON.parse(JSON.stringify(body.NewsLetter.HRmarkup)).replace(/\\/g,"");
  this.Amarkup = JSON.parse(JSON.stringify(body.NewsLetter.Amarkup)).replace(/\\/g,"");
  this.Mrmarkup = JSON.parse(JSON.stringify(body.NewsLetter.Mrmarkup)).replace(/\\/g,"");

})
  }

}
