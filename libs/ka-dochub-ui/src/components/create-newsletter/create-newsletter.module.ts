import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterenetringDetailsComponent } from './components/newsletterenetring-details/newsletterenetring-details.component';
import {EditNewsletterDataComponent} from './components/EditNewsletterData/edit-newsletter-data.component';
import { CreateNewsletterRoutingModule } from './create-newsletter.routing';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../core_modules';
import { NewsletterDataComponent } from './components/newsletter-data/newsletter-data.component';
import {DeleteNewsletterComponent} from './components/delete-newsletter/delete-newsletter.component';
import {DuplicateNewsletterComponent } from './components/duplicate-newsletter/duplicate-newsletter.component';
import { NewsletterViewComponent} from './components/newsletter-view/newsletter-view.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SanitizePipe } from './custome_pipe/sanitize.pipe';
import {FroalaEditorModule} from './../../../froala/editor/editor.module';
import {FroalaViewModule} from './../../../froala/view/view.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FroalaEditorModule,
    FroalaViewModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    CreateNewsletterRoutingModule,
  
  ],
  declarations: [
    NewsletterDataComponent, 
    SanitizePipe,
    DeleteNewsletterComponent, 
    NewsletterenetringDetailsComponent,
    EditNewsletterDataComponent,
    DuplicateNewsletterComponent,
    NewsletterViewComponent,
  
    ],
  exports: [RouterModule,FroalaEditorModule,
    FroalaViewModule,NewsletterViewComponent, CommonModule,DeleteNewsletterComponent,DuplicateNewsletterComponent, NewsletterenetringDetailsComponent,EditNewsletterDataComponent,NewsletterDataComponent]
})
export class CreateNewsletterModule { }
