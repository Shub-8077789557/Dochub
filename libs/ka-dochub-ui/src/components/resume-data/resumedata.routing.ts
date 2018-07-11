import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ResumeDataComponent} from './resume-data.component';
export const ResumeDataRoutes: Route[] = [
    { path:'',component:ResumeDataComponent,
          children:[
                    { path: 'resume-data', component: ResumeDataComponent, data: { breadcrumb: 'resume-data' }}
                    
                  ]
    
    },
    ];
    
    @NgModule({
      imports: [CommonModule, RouterModule.forChild(ResumeDataRoutes)],
      exports: [CommonModule,RouterModule],

    })
    export class ResumeRoutingModule { }