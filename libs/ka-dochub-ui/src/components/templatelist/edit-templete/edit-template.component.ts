import { createEmbeddedView } from '@angular/core/src/view/view';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TestBed } from '@angular/core/testing';
import {
  Component, state, ContentChildren, QueryList, AfterContentInit,
  TemplateRef, ViewChild, ViewContainerRef, EmbeddedViewRef, HostBinding, ElementRef, HostListener
} from '@angular/core';
import { DndModule, DroppableComponent } from 'ng2-dnd';
import { $, element } from 'protractor';
import { MatGridList, MatGridTile, MatRadioChange } from '@angular/material';
import { Renderer } from '@angular/core/src/render/api';
import { Directionality } from '@angular/cdk/bidi/typings/directionality';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { NgIf } from '@angular/common/src/directives/ng_if';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TemplateUpdateService } from '../../../../shared_services/TemplateUpdate/template-update.service';
import { LoginService } from '../../../../shared_services/login/login.service';
import { TemplateViewService } from '../../../../shared_services/TemplateView/template-view.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-edittemplate',
  templateUrl: './edit-template.component.html',
  styleUrls: ['./edit-template.component.scss']
})
export class EditTemplateComponent implements OnInit {

  tempSave;
  templateData = {
    templateId: "",
    templateName: "",
    header: "",
    footer: "",
    userId: "",
    createdDate: ""
  };

  headerForm = new FormGroup({
    headerMarkup: new FormControl(''),
  });

  footerForm = new FormGroup({
    footerMarkup: new FormControl(''),
  });

  constructor(private viewContainerRef: ViewContainerRef,
    private tempsave: TemplateUpdateService,
    private templateViewService: TemplateViewService,
    public user: LoginService, private toaster: ToastsManager,
    private route: Router, private activatedRoute: ActivatedRoute) {

    this.toaster.setRootViewContainerRef(viewContainerRef);
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      params => {
        this.templateData.templateId = params.id;
        this.templateView();
      });
  }

  templateView() {
    // const userid = this.user.getUser().user.id;
    // const username = this.user.getUser().user.username;
    let response;
    let body;
    const tempView = {
      //Userid: atob(userid).toString()
      _id: this.templateData.templateId
    }
    this.templateViewService.viewTemplate(tempView).subscribe((data: any) => (response = data),
      error => () => { },
      () => {
        body = response.body;
        console.log(response);
        if (response.status === 200) {
          this.templateData.templateName = body.TemplateName
          this.templateData.header = body.Header
          this.templateData.footer = body.Footer
          this.templateData.createdDate = body.CreatedDate
          this.templateData.userId = body.Userid

          // const structuremarkup = JSON.stringify(
          //   this.form3.controls['markup'].value).replace(/^"/, "").replace(/"$/, "");
          this.headerForm.controls['headerMarkup'].setValue(this.templateData.header);
          this.footerForm.controls['footerMarkup'].setValue(this.templateData.footer);

        } else {
          this.toaster.error('Unable to get template, Please try again later.', 'Oops!');
        }
      });
  }

  onSaveClick(name: string) {

    this.templateData.templateName = name;
    const headerValue = this.headerForm.controls['headerMarkup'].value;
    const footerValue = this.footerForm.controls['footerMarkup'].value;

    this.templateData.header = JSON.stringify(headerValue).replace(/^"/, "").replace(/"$/, "");
    this.templateData.footer = JSON.stringify(footerValue).replace(/^"/, "").replace(/"$/, "");

    if (!this.templateData.templateName) {
      this.toaster.error("Please Enter the Template Name", "Oops!")
    } else {
      let response;
      let body;
      const userid = this.user.getUser().user.id;
      const username = this.user.getUser().user.username;
      this.tempSave = {
        _id: this.templateData.templateId,
        Templatename: this.templateData.templateName,
        Header: this.templateData.header,
        Footer: this.templateData.footer,
        Createdby: atob(username).toString(),
        Userid: atob(userid).toString()
      }

      this.tempsave.updateTemplate(this.tempSave).subscribe((data: any) => (response = data),
        error => () => { },
        () => {
          body = response.body;
          //console.log(response);
          if (typeof body.success === typeof true) {
            this.toaster.success('Template Saved Succeesfully', 'Success!');
            setTimeout(() => this.route.navigate(['dashboard/templatelist']), 2000);
          } else {
            this.toaster.error('Unable to save template, Please try again later.', 'Oops!');
          }
        })
    }

  }

  onCancelClick() {
    this.route.navigate(['dashboard/templatelist']);
  }

}
