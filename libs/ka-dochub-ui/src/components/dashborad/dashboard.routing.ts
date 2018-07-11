import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { MaterialModule } from '../../../core_modules/';
import { SharedLayoutModule, CustomToast } from '../../../shared_layout/';
import { AuthGuard } from '../../../shared_services/Auth.guard/auth.guard';
import { RoleGuard } from '../../../shared_services/RoleGuard/Role.Guard';
import { SharedModule } from '../../../shared_services/shared.module';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { HomeRoutes } from '../home/home.routing';
import { ResumeDataRoutes } from '../resume-data/resumedata.routing';
import {CreateNewsletterRoutes} from './../create-newsletter/create-newsletter.routing';
import { AdminNewsletterRoutes} from './../admin-data/admin-routing.module';
import {TemplatelistRoutes} from './../templatelist/template-routing.module';
import {StructurelistRoutes} from './../../structurelist/structure-routing.module';
import {
  DashboradComponent,
  DochubUserComponentsModule,
  CreateuserComponent,
  HomeComponent,
  UserloginComponent,
  RegisterComponent,
  DemoComponent
} from '../.././components/'


export const kaDashboardRoutes: Route[] = [
  {
    path: '', component: DashboradComponent,
    children: [
      { path: 'home', children: HomeRoutes, data: { breadcrumb: 'home' } },
      { path: 'resume-data', children: ResumeDataRoutes },
      { path: 'newsletter-data', children: CreateNewsletterRoutes },
      { path: 'admin-newsletter-data', children:  AdminNewsletterRoutes},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'templatelist', children:TemplatelistRoutes },
      { path: 'structurelist', children:StructurelistRoutes }
     

    ]

  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(kaDashboardRoutes), MaterialModule, DochubUserComponentsModule, SharedLayoutModule, SharedModule, ToastModule.forRoot()],
  exports: [CommonModule, MaterialModule, SharedLayoutModule, DochubUserComponentsModule, RouterModule],
  providers: [{ provide: ToastOptions, useClass: CustomToast }]
})
export class KaDochubDashboardModule { }
