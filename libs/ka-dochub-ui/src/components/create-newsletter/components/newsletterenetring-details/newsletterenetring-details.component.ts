import { Component, OnInit, OnDestroy, Inject, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NewsletterData } from './../../newslettermodel/newslettermodel';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { LoginService } from '../../../../../shared_services/login/login.service';
import { NewsletterstoreService } from '../../../../../shared_services/newsletter-store/newsletterstore.service';
import { NewsletterDataComponent } from './../../components/newsletter-data/newsletter-data.component';
import { NewsletterViewComponent } from './../newsletter-view/newsletter-view.component';
declare var $: any;
@Component({
  selector: 'app-newsletterenetring-details',
  templateUrl: './newsletterenetring-details.component.html',
  styleUrls: ['./newsletterenetring-details.component.scss']
})
export class NewsletterenetringDetailsComponent implements OnInit, OnDestroy {
  HR;
  id;
  Update;
  nav;
  documentname: string;
  newsdata: NewsletterDataComponent;
  newsview: NewsletterViewComponent;
  constructor(public toaster: ToastsManager, private route: Router,
    vcr: ViewContainerRef, public user: LoginService, public _newsletterservice: NewsletterstoreService,
  ) {
    this.toaster.setRootViewContainerRef(vcr);

  }
  form2 = new FormGroup({
    HRmarkup: new FormControl(''),
  });

  form3 = new FormGroup({
    Amarkup: new FormControl(''),
  });

  form4 = new FormGroup({
    Mrmarkup: new FormControl(''),
  });

  ngOnInit() {
    //     let response;
    //     let body;
    //     const userid = this.user.getUser().user.id;
    //    const username = this.user.getUser().user.username;
    //    const markup = JSON.stringify(this.form2.controls['markup'].value).replace(/^"|\"$/,"")
    //     const currentdate = new Date();
    //     const date = Date().toString(); 
    //   this.Update = {

    //     userid:atob(userid).toString(),
    //     username :atob(username).toString(),
    //     createdby: atob(username).toString(),
    //     documentname:this.documentname,
    //     departmentname:'HR',
    //     createddate: '2017,06,20',
    //     markup :markup
    //   };

    //     this.newsletterupdate.UpdateNewsLetter(this.Update).subscribe((data:any)=> (response = data),
    //   error => () => {},
    // ()=> {
    //   body = response.body;
    //   console.log(response);
    // })
  }

  navigateTonewsletterdata() {
    this.route.navigate(['/newsletter-data']);
  }
  onSubmit2(documentname: string) {
    if (documentname === '') {
      this.toaster.error('Please Eneter Valid Document Name', 'Oops!');
    }
    else {
      let response;
      let body;
      
      const userid = this.user.getUser().user.id;
      const username = this.user.getUser().user.username;
      console.log(atob(userid).toString());
      const Hrmarkup = JSON.stringify(this.form2.controls['HRmarkup'].value).replace(/^"/, "").replace(/"$/, "");
      const Amarkup = JSON.stringify(this.form3.controls['Amarkup'].value).replace(/^"/, "").replace(/"$/, "");
      const Mrmarkup = JSON.stringify(this.form4.controls['Mrmarkup'].value).replace(/^"/, "").replace(/"$/, "");
      const currentdate = new Date();
      const date = Date().toString();
      console.log(date);
      this.HR = {
        userid: atob(userid).toString(),
        createdby: atob(username).toString(),
        documentname: documentname,
        departmentname: "Hr",
        Hrmarkup: Hrmarkup,
        Amarkup : Amarkup,
        Mrmarkup : Mrmarkup
      };
      console.log(this.HR);

      this._newsletterservice.StoreNewsLetter(this.HR).subscribe((data: any) => (response = data),
        error => () => { },
        () => {
          body = response.body;
          console.log(response);
          if (typeof body.success === typeof true) {
            this.toaster.success('NewsLetter Added Succeesfully', 'Success!');
            this.nav = setInterval(() => this.route.navigate(['../dashboard/newsletter-data']), 3000);
          } else {
            this.toaster.error('Please Try Again Later', 'Oops!');
          }
        }
      );

    }
  }

  ngOnDestroy() {
    clearInterval(this.nav);

  }
}
