import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { TemplatelistComponent } from './templatelist.component';
import { MatCardModule } from '@angular/material';
import { MaterialModule } from './../../../core_modules';
import { DragDropComponent } from './../drag-drop/components/drag-drop/drag-drop.component';
import { AuthGuard } from '../../../shared_services/Auth.guard/auth.guard';
import { RoleGuard } from '../../../shared_services/RoleGuard/Role.Guard';
import { EditTemplateComponent } from './edit-templete/edit-template.component';

export const TemplatelistRoutes: Route[] = [
  { path: '', component: TemplatelistComponent, data: { breadcrumb: 'templatelist' } },
  { path: 'dragndrop', component: DragDropComponent, data: { breadcrumb: 'dragndrop' } },
  { path: 'edittemplate/:id', component: EditTemplateComponent },
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(TemplatelistRoutes), MatCardModule, MaterialModule
  ],
  exports: [CommonModule, RouterModule, MatCardModule, MaterialModule],
  declarations: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class TemplateRoutingModule { }
