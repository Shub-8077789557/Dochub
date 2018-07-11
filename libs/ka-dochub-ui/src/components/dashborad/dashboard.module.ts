import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DndModule } from 'ng2-dnd';
import { CommonModule } from '@angular/common';
import { DashboradComponent } from './dashborad.component';
 import { SharedLayoutModule } from '../../../shared_layout/';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../core_modules/material/material.module';
import {TemplateModule} from './../templatelist/template.module';
import {StructureModule} from './../../structurelist/structure.module';
@NgModule({
imports:[CommonModule,
RouterModule,
FormsModule,
TemplateModule,
StructureModule,
ReactiveFormsModule,
MaterialModule,
SharedLayoutModule,
DndModule.forRoot(),
],
schemas: [CUSTOM_ELEMENTS_SCHEMA],
declarations:[DashboradComponent],
exports:[RouterModule,CommonModule,DashboradComponent, DndModule,TemplateModule,StructureModule]

})
export class DashboardModule{}