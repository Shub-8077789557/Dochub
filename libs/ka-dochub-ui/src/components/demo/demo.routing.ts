import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { DemoComponent} from './demo.component';
export const demoRoutes: Route[] = [
    { path:'',component: DemoComponent,
          children:[
                    { path: 'demo', component: DemoComponent, data: { breadcrumb: 'demo' }} 
                  ]
    
    },
    ];
    
    @NgModule({
      imports: [CommonModule, RouterModule.forChild(demoRoutes)],
      exports: [CommonModule,RouterModule],

    })
    export class KaDochubUiModule { }