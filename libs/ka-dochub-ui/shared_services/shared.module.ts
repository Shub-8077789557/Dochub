import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Configuration } from '../config/';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserRegisterService } from './user_register/user-register.service';
import { RoleService } from './Role/role.service';
import { DochubInterceptor } from './Dochub_Interceptor/DochubInterceptor';
import { LoginService } from './login/login.service';
import { AuthGuard } from './Auth.guard/auth.guard';
import { RoleGuard } from './RoleGuard/Role.Guard';
import { RoleupdationService } from './RoleUpdation/roleupdation.service';
import { NewsletterDataService } from './newsletter-data/newsletter-data.service';
import { NewsletterstoreService } from './newsletter-store/newsletterstore.service';
import { NewslistingService } from './Newslisting/newslisting.service';
import { NewsletterdeleteService } from './NewsletterDelete/newsletterdelete.service';
import { NewsletterDuplicateService } from './newsletter-duplicate/newsletter-duplicate.service';
import { NewsletterViewService } from './newsletter-view/newsletter-view.service';
import { NewsletterupdateService } from './Newsletterupdate/newsletterupdate.service';
import { GetroleService } from './get_role/getrole.service';
import { NewsletterExportService } from './NewsletterExport/newsletter-export.service';
import { AdminNewsletterdataService } from './AdminNewsletterdata/admin-newsletterdata.service';
import { UpdateNewsletterService } from './UpdateNewsLetter/update-newsletter.service';
import { TemplatelistingService } from './../shared_services/Templatelisting/templatelisting.service';
import { TemplateSaveService } from './../shared_services/TemplateSave/template-save.service';
import { TemplateDeleteService } from './TemplateDelete/template-delete.service';
import { StructureSaveService } from './Structuresave/structure-save.service';
import { StructurelistService } from './Structurelist/structurelist.service';
import { DeleteStructureService } from './StructureDelete/delete-structure.service';
import { DuplicateStructureService } from './DuplicateStructure/duplicate-structure.service';
import { DuplicateTemplateService } from './DupliacteTemplate/duplicate-template.service';
import { EditStructureService } from './EditStructure/edit-structure.service';
import { StructureViewService } from './StructureView/structure-view.service';
import { TemplateUpdateService } from './TemplateUpdate/template-update.service';
import { TemplateViewService } from './TemplateView/template-view.service';
import {ExportNewsletterListingService} from './ExportNewsletterListing/export-newsletter-listing.service';
@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [
    Configuration,
    AuthGuard,
    UserRegisterService,
    RoleService,
    LoginService,
    RoleupdationService,
    AuthGuard,
    RoleGuard,
    NewsletterDataService,
    NewsletterstoreService,
    NewslistingService,
    NewsletterdeleteService,
    NewsletterDuplicateService,
    NewsletterViewService,
    NewsletterupdateService,
    GetroleService,
    NewsletterExportService,
    AdminNewsletterdataService,
    UpdateNewsletterService,
    TemplatelistingService,
    TemplateSaveService,
    TemplateDeleteService,
    TemplateUpdateService,
    TemplateViewService,
    StructureSaveService,
    StructurelistService,
    DeleteStructureService,
    DuplicateStructureService,
    DuplicateTemplateService,
    EditStructureService,
    StructureViewService,
    ExportNewsletterListingService,
    { provide: HTTP_INTERCEPTORS, useClass: DochubInterceptor, multi: true }
  ]
})
export class SharedModule { }
