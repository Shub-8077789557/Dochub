import { Component, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";


@Component({
  selector: 'app-froala-component',
  template: `
    <textarea [froalaEditor]="config" (froalaModelChange)="onChange($event)" [(froalaModel)]="model"></textarea>
   `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FroalaComponent),
      multi: true
    }
  ]
})
export class FroalaComponent implements ControlValueAccessor {
  model: any;

  config: Object = {

    imageUploadURL: 'http://localhost:3000/upload_image',

    //  Set max image size to 5MB.
    imageMaxSize: 5 * 1024 * 1024,

    //Allow to upload PNG and JPG.
    imageAllowedTypes: ['jpeg', 'jpg', 'png'],

  }
  constructor() {

  }

  // Begin ControlValueAccesor methods.
  onChange = (_) => { };
  onTouched = () => { };

  // Form model content changed.
  writeValue(content: any): void {
    this.model = content;
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  // End ControlValueAccesor methods.


}
