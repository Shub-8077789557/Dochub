import { createEmbeddedView } from '@angular/core/src/view/view';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TestBed } from '@angular/core/testing';
import { Component, state , ContentChildren, QueryList, AfterContentInit, 
    TemplateRef, ViewChild, ViewContainerRef, EmbeddedViewRef, HostBinding, ElementRef, HostListener  } from '@angular/core';
import { DndModule, DroppableComponent } from 'ng2-dnd';
import { $, element } from 'protractor';
import { MatGridList, MatGridTile, MatRadioChange } from '@angular/material';
import { Renderer } from '@angular/core/src/render/api';
import { Directionality } from '@angular/cdk/bidi/typings/directionality';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { NgIf } from '@angular/common/src/directives/ng_if';
import {TemplateSaveService} from './../../../../../shared_services/TemplateSave/template-save.service';
import { LoginService } from '../../../../../shared_services/login/login.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'appdropzone',
  templateUrl: './drop-zone.component.html',
  styleUrls: ['./drop-zone.component.scss']
})
export class DropZoneComponent {
  tempSave; 
  nav;
  templatename:string;

    constructor( private viewContainerRef: ViewContainerRef, private tempsave : TemplateSaveService,
         public user: LoginService, private toaster : ToastsManager, private route : Router ) {
       
        this.toaster.setRootViewContainerRef(viewContainerRef);
    }

      

    
  form3 = new FormGroup({
    headermarkup: new FormControl(''),
  });

     
  form4 = new FormGroup({
    footermarkup: new FormControl(''),
  });

     
    templateSave(templatename:string){
      if(templatename===" "){
        this.toaster.error("Please Enter the Template Name", "Oops!")
      } else {
        let response;
       let body;
       const userid = this.user.getUser().user.id;
       const username = this.user.getUser().user.username;
       const headermarkup = JSON.stringify(this.form3.controls['headermarkup'].value).replace(/^"/, "").replace(/"$/, "");
       const footermarkup = JSON.stringify(this.form4.controls['footermarkup'].value).replace(/^"/, "").replace(/"$/, "");
       this.tempSave = {
        Userid: atob(userid).toString(),
        Createdby: atob(username).toString(),
        Templatename : templatename,
        Header : headermarkup,
        Footer : footermarkup
       }
       this.tempsave.TemplateSave(this.tempSave).subscribe((data:any)=> (response = data),
       error => () => { },
       () => {
        body = response.body;
        console.log(response);
        if (typeof body.success === typeof true) {
          this.toaster.success('Template Saved Succeesfully', 'Success!');
          this.nav = setTimeout(() => this.route.navigate(['dashboard/templatelist']), 3000);
        } else {
          this.toaster.error('Please Try Again Later', 'Oops!');
        }
      })
      }
       
    }

    
}
