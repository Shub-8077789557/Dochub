import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from '../core_modules/material/material.module';
import { ProgresBarComponent } from './progres-bar/progres-bar.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent} from './breadcrumb/breadcrumb.component'
@NgModule({
  imports: [CommonModule,RouterModule, MaterialModule, NgProgressModule],
  declarations: [ BreadcrumbComponent,NavBarComponent, ProgresBarComponent, SidebarComponent],
  exports: [
    CommonModule,
    NavBarComponent,
    ProgresBarComponent,
    SidebarComponent,
    RouterModule,
    BreadcrumbComponent
  ]
})
export class SharedLayoutModule {}
