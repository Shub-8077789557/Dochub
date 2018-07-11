import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../core_modules';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminnewsletterDataComponent} from './adminnewsletter-data/adminnewsletter-data.component';
import {ExportNewspaperComponent} from './export-newspaper/export-newspaper.component';
import {AdminnewsletterViewComponent} from './adminnewsletter-view/adminnewsletter-view.component';
import {AdminviewSanitizePipe} from './AdminViewPipes/adminview-sanitize.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,AdminRoutingModule,MaterialModule,FormsModule
  ],
  declarations: [AdminnewsletterDataComponent,ExportNewspaperComponent,AdminnewsletterViewComponent,AdminviewSanitizePipe],
  exports:[CommonModule,AdminRoutingModule,AdminnewsletterDataComponent,MaterialModule,ExportNewspaperComponent,AdminnewsletterViewComponent,AdminviewSanitizePipe]
})
export class AdminModule { }
