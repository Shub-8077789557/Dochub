import {NgModule, ModuleWithProviders } from '@angular/core';
import {CommonModule} from '@angular/common'; 
import { FroalaEditorDirective } from './editor.directive';
import {FroalaComponent } from '../components/froala.component';

@NgModule({
  declarations: [FroalaEditorDirective,FroalaComponent],
  exports: [CommonModule,FroalaEditorDirective,FroalaComponent]
})

export class FroalaEditorModule {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: FroalaEditorModule, providers: []};
  }
}
