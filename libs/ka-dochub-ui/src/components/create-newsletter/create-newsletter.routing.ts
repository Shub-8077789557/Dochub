import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { MatCardModule } from '@angular/material';
import { MaterialModule } from './../../../core_modules/material/material.module';
import { NewsletterenetringDetailsComponent } from './../create-newsletter/components/newsletterenetring-details/newsletterenetring-details.component';
import { AuthGuard } from '../../../shared_services/Auth.guard/auth.guard';
import { NewsletterDataComponent } from './components/newsletter-data/newsletter-data.component';
import {DeleteNewsletterComponent} from './components/delete-newsletter/delete-newsletter.component';
import {DuplicateNewsletterComponent } from './components/duplicate-newsletter/duplicate-newsletter.component';
import { RoleGuard } from '../../../shared_services/RoleGuard/Role.Guard';
import { NewsletterViewComponent} from './components/newsletter-view/newsletter-view.component';
import {EditNewsletterDataComponent} from './components/EditNewsletterData/edit-newsletter-data.component';
export const CreateNewsletterRoutes: Route[] = [
  
   
    { path: '', component: NewsletterDataComponent, data: { breadcrumb: 'newsletter-data' }},      
    { path: 'newsletter-data', component: NewsletterDataComponent, data: { breadcrumb: 'newsletter-data' }},      
    { path: 'newsletterentering-details', component: NewsletterenetringDetailsComponent, data: { breadcrumb: 'newsletterentering-details' }},
    { path: 'edit-newsletter-data/:_id', component:EditNewsletterDataComponent , data: { breadcrumb: 'edit-newsletter-data' }},
    { path: 'delete-newsletter', component: DeleteNewsletterComponent, data: { breadcrumb: 'delete-newsletter' } },
    { path: 'duplicate-newsletter', component: DuplicateNewsletterComponent , data: { breadcrumb: 'duplicate-newsletter' } },
    { path: 'newsletter-view', component: NewsletterViewComponent  , data: { breadcrumb: 'newsletter-view' } },
    
   
];



@NgModule({
  imports: [CommonModule, RouterModule.forChild(CreateNewsletterRoutes)],
  exports: [CommonModule, RouterModule],

})
export class CreateNewsletterRoutingModule { }