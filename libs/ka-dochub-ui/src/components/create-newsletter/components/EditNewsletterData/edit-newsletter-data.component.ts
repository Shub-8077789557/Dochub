import { Component, ViewContainerRef, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsletterDataComponent } from '../newsletter-data/newsletter-data.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewsletterViewService } from '../../../../../shared_services/newsletter-view/newsletter-view.service';
import { LoginService } from '../../../../../shared_services/login/login.service';
import { UpdateNewsletterService } from '../../../../../shared_services/UpdateNewsLetter/update-newsletter.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-edit-newsletter-data',
  templateUrl: './edit-newsletter-data.component.html',
  styleUrls: ['./edit-newsletter-data.component.scss']
})
export class EditNewsletterDataComponent implements OnInit, OnDestroy {
  _id: string;
  value;
  HRmarkup;
  Amarkup;
  Mrmarkup;
  dept;
  nav;

  constructor(public uroute: Router, public toaster: ToastsManager, public vcr: ViewContainerRef, private Newsletter: UpdateNewsletterService, private user: LoginService, private newsletterview: NewsletterViewService, private route: ActivatedRoute) {
    this.toaster.setRootViewContainerRef(vcr);

  }
  form2 = new FormGroup({
   HRmarkup: new FormControl(),
  });

  form3 = new FormGroup({
    Amarkup: new FormControl(''),
  });

  form4 = new FormGroup({
    Mrmarkup: new FormControl(''),
  });
  ngOnInit() {

    this._id = this.route.snapshot.params['_id'];
    console.log(this._id);
    let response;
    let body;
    const newsletterid = {
      _id: this._id
    };
    console.log(newsletterid._id);
    this.newsletterview.NewsLetterView(newsletterid).subscribe((data: any) => (response = data),
      error => () => { },
      () => {
        body = response.body;
        console.log(body);
        this.value = body.NewsLetter.Documentname;
        console.log(this.value);
        this.HRmarkup = JSON.parse(JSON.stringify(body.NewsLetter.HRmarkup)).replace(/\\/g, "")
        this.form2.controls['HRmarkup'].setValue(this.HRmarkup);
        this.Amarkup = JSON.parse(JSON.stringify(body.NewsLetter.Amarkup)).replace(/\\/g, "")
        this.form3.controls['Amarkup'].setValue(this.Amarkup);
        this.Mrmarkup = JSON.parse(JSON.stringify(body.NewsLetter.Mrmarkup)).replace(/\\/g, "")
        this.form4.controls['Mrmarkup'].setValue(this.Mrmarkup);
        this.dept = body.NewsLetter.departmentname;
      })

  }

  onSubmit2(documentname) {
    if (documentname === '') {
      this.toaster.error('Please Eneter Valid Document Name', 'Oops!');
    }
    else{
    let response;
    let body;
    const userid = this.user.getUser().user.id;
    const username = this.user.getUser().user.username;
    const Hrmarkup = JSON.stringify(this.form2.controls['HRmarkup'].value).replace(/^"/, "").replace(/"$/, "");
    const Amarkup = JSON.stringify(this.form3.controls['Amarkup'].value).replace(/^"/, "").replace(/"$/, "");
      const Mrmarkup = JSON.stringify(this.form4.controls['Mrmarkup'].value).replace(/^"/, "").replace(/"$/, "");
    const UpdateNewsletter = {
      _id: this._id,
      userid: atob(userid).toString(),
      createdby: atob(username).toString(),
      documentname: documentname,
      departmentname: this.dept,
      Hrmarkup: Hrmarkup,
      Amarkup : Amarkup,
      Mrmarkup : Mrmarkup
    };
    console.log(UpdateNewsletter);

    this.Newsletter.Update(UpdateNewsletter).subscribe((data: any) => (response = data),
      error => () => { },
      () => {
        body = response.body;
        console.log(response);
        if (typeof body.success === typeof true) {
          this.toaster.success('NewsLetter Updated Succeesfully', 'Success!');
          this.nav = setInterval(() => this.uroute.navigate(['../dashboard/newsletter-data']), 8000);
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
