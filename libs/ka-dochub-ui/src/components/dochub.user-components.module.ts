import { DropZoneComponent } from '@DOCHUB/ka-dochub-ui/src/components/drag-drop/components/drop-zone/drop-zone.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import { SharedLayoutModule } from '../../shared_layout/';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../core_modules/material/material.module';
import { RegisterComponent } from './register/register.component';
import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashborad/dashboard.module';
import { ResumeDataModule } from './resume-data/resume-data.module';
import { CreateuserComponent } from './createuser/createuser.component'
import { CreateNewsletterModule } from './create-newsletter/create-newsletter.module';
import {AdminModule} from './admin-data/admin.module';
import {TemplateModule} from './templatelist/template.module';
import {StructureModule} from './../structurelist/structure.module';
import {FroalaEditorModule} from './../../froala/editor/editor.module';
import {FroalaViewModule} from './../../froala/view/view.module';
@NgModule({
  imports: [
    CommonModule,
    FroalaEditorModule,
    FroalaViewModule,
    SharedLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    CreateNewsletterModule,
    AdminModule,
    //
    HomeModule,
    DashboardModule,
    ResumeDataModule,
    TemplateModule,
    StructureModule
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [UserloginComponent,CreateuserComponent,
    RegisterComponent],
   
  exports: [CommonModule,
    UserloginComponent,
    RegisterComponent,
    CreateuserComponent,
    RouterModule,
    FroalaEditorModule,
    FroalaViewModule,
    HomeModule,
    DashboardModule,
    ResumeDataModule,
    CreateNewsletterModule,
    AdminModule,
    TemplateModule,
    StructureModule,  
  ]

})
export class DochubUserComponentsModule { }
