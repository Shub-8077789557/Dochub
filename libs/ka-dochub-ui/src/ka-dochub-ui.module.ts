import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { MaterialModule } from '../core_modules/';
import { SharedLayoutModule, CustomToast } from '../shared_layout/';
import { AuthGuard } from '../shared_services/Auth.guard/auth.guard';
import { RoleGuard } from '../shared_services/RoleGuard/Role.Guard';
import { SharedModule } from '../shared_services/shared.module';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { kaDashboardRoutes } from './components/dashborad/dashboard.routing';
import { DochubUserComponentsModule, UserloginComponent, CreateuserComponent } from './components/'
import { DragDropComponent } from './components/drag-drop/components/drag-drop/drag-drop.component';
import { TemplatelistComponent } from './components/templatelist/templatelist.component';
import { StructurelistComponent } from './structurelist/structurelist.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TemplateModule } from './components/templatelist/template.module';
import { StructureModule } from './structurelist/structure.module';

export const kaDochubUiRoutes: Route[] =
  [
    { path: '', component: UserloginComponent, data: { breadcrumb: 'login' } },
    { path: 'login', component: UserloginComponent, data: { breadcrumb: 'login' } },
    { path: 'dashboard', children: kaDashboardRoutes },
    { path: 'user', component: CreateuserComponent },
    { path: 'templatelist', component: TemplatelistComponent },
    { path: 'structurelist', component: StructurelistComponent }
  ];

@NgModule({
  imports: [
    CommonModule,
    StructureModule,
    RouterModule.forRoot(kaDochubUiRoutes),
    MaterialModule,
    DochubUserComponentsModule,
    SharedLayoutModule,
    SharedModule,
    TemplateModule,
    ToastModule.forRoot()
  ],
  exports: [
    CommonModule,
    MaterialModule,
    StructureModule,
    SharedLayoutModule,
    RouterModule,
    DochubUserComponentsModule,
    TemplateModule
  ],
  providers: [
    { provide: ToastOptions, useClass: CustomToast }
  ],
  declarations: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class KaDochubUiModule { }
