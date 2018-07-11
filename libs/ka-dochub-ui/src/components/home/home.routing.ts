import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent} from './home.component';
import { AuthGuard } from '../../../shared_services/Auth.guard/auth.guard';
import { RoleGuard } from '../../../shared_services/RoleGuard/Role.Guard';


export const HomeRoutes: Route[] = [


    { path:'', component: HomeComponent,  

          children:[
                    { path: 'home', component: HomeComponent, canActivate: [AuthGuard], data: { breadcrumb: 'dashboard', role: "user", Access: { "Read": true, "write": true, "Delete": true } } },
                   
                    
                  ]
    
    },
    
    ];
    
    @NgModule({
      imports: [CommonModule, RouterModule.forChild(HomeRoutes)],
      exports: [CommonModule,RouterModule],

    })
    export class HomeRoutingModule { }