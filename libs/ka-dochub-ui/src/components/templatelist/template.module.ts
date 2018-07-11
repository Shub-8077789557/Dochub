import { NgModule, CUSTOM_ELEMENTS_SCHEMA, TemplateRef } from '@angular/core';
import { DndModule } from 'ng2-dnd';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../../core_modules';
import { TemplateRoutingModule } from './template-routing.module';
import { TemplatelistComponent } from './templatelist.component';
import { DropZoneComponent } from './../drag-drop/components/drop-zone/drop-zone.component';
import { DragDropComponent } from './../drag-drop/components/drag-drop/drag-drop.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DeleteTemplateComponent } from './delete-template/delete-template.component';
import { DuplicateTemplateComponent } from './duplicate-template/duplicate-template.component';
import { FroalaEditorModule } from './../../../froala/editor/editor.module';
import { FroalaViewModule } from './../../../froala/view/view.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditTemplateComponent } from './edit-templete/edit-template.component';

@NgModule({
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FroalaEditorModule,
    FroalaViewModule,
    MaterialModule,
    DndModule.forRoot(),
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    TemplatelistComponent,
    DeleteTemplateComponent,
    DuplicateTemplateComponent,
    DropZoneComponent,
    DragDropComponent,
    EditTemplateComponent
  ],
  entryComponents: [
    DeleteTemplateComponent,
    DuplicateTemplateComponent,
    EditTemplateComponent
  ],
  exports: [
    CommonModule,
    TemplateRoutingModule,
    MaterialModule,
    TemplatelistComponent,
    FormsModule,
    FroalaEditorModule,
    FroalaViewModule,
    ReactiveFormsModule
  ]
})
export class TemplateModule { }
