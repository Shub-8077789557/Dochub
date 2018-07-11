import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Route} from '@angular/router';
import {StructurelistComponent} from './structurelist.component';
import { MaterialModule } from './../../core_modules';
import { MatCardModule } from '@angular/material';
import {StructureComponent} from './../structurelist/structure/structure.component';
import {EditStructureComponent} from './structure/edit-structure/edit-structure.component';
export const StructurelistRoutes: Route[] = [
  { path: '', component:StructurelistComponent , data: { breadcrumb: 'structurelist' } },
  { path: 'structure', component:StructureComponent , data: { breadcrumb: 'structure' } },
  { path: 'edit-structure/:_id', component:EditStructureComponent , data: { breadcrumb: 'edit-structure/:_id' } },
 
];
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(StructurelistRoutes),MatCardModule,MaterialModule
  ],
  exports:[CommonModule,RouterModule,MatCardModule,MaterialModule],
  declarations: []
})
export class StructureRoutingModule { }
