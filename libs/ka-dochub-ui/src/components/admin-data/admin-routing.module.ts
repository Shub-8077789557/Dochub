import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Route} from '@angular/router';
import {AdminnewsletterDataComponent} from './adminnewsletter-data/adminnewsletter-data.component';
import { MatCardModule } from '@angular/material';
import { MaterialModule } from './../../../core_modules/material/material.module';
import {ExportNewspaperComponent} from './export-newspaper/export-newspaper.component';
import {AdminnewsletterViewComponent} from './adminnewsletter-view/adminnewsletter-view.component';

export const AdminNewsletterRoutes: Route[] = [
  
   
  { path: '', component:AdminnewsletterDataComponent , data: { breadcrumb: 'admin-newsletter-data' }},      
  { path: 'export-newsletter', component: ExportNewspaperComponent, data: { breadcrumb: 'export-newsletter' } },
  { path: 'admin-newsletter-view', component:AdminnewsletterViewComponent , data: { breadcrumb: 'admin-newsletter-view' } },
 
  
 
];
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(AdminNewsletterRoutes),MatCardModule,MaterialModule
  ],
  exports:[CommonModule,RouterModule,MatCardModule,MaterialModule],
  declarations: []
})
export class AdminRoutingModule { }
