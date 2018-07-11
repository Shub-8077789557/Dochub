import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StructurelistComponent} from './structurelist.component';
import { MaterialModule } from './../../core_modules';
import {StructureRoutingModule} from './structure-routing.module';
import {StructureComponent} from './../structurelist/structure/structure.component';
import {FroalaEditorModule} from './../../froala/editor/editor.module';
import {FroalaViewModule} from './../../froala/view/view.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DeleteStructureComponent} from './structure/delete-structure/delete-structure.component'
import {DuplicateStructureComponent} from './structure/duplicate-structure/duplicate-structure.component';
import {EditStructureComponent} from './structure/edit-structure/edit-structure.component';
@NgModule({
  imports: [
    FroalaViewModule,FroalaEditorModule,CommonModule,MaterialModule,StructureRoutingModule,FormsModule, ReactiveFormsModule
  ],
  declarations: [StructurelistComponent,StructureComponent,EditStructureComponent,DeleteStructureComponent,DuplicateStructureComponent],
  entryComponents: [
    DeleteStructureComponent,DuplicateStructureComponent
],
  exports:[FroalaViewModule,FroalaEditorModule,MaterialModule,StructurelistComponent,EditStructureComponent,StructureComponent,StructureRoutingModule,FormsModule, ReactiveFormsModule,DeleteStructureComponent,DuplicateStructureComponent]
})
export class StructureModule { }
