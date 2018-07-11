import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { MaterialModule } from '../../../core_modules/material/material.module';
@NgModule({
imports:[CommonModule,
RouterModule,
HomeRoutingModule,
MaterialModule
],
declarations:[HomeComponent],
exports:[RouterModule,CommonModule,HomeComponent]

})
export class  HomeModule{}