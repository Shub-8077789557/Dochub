import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { NxModule } from '@nrwl/nx';
import { FlexLayoutModule } from '@angular/flex-layout';
import { kaDochubUiRoutes, KaDochubUiModule } from '@DOCHUB/ka-dochub-ui';

@NgModule({
  imports: [
    BrowserModule,
    FlexLayoutModule,
    NxModule.forRoot(),
    BrowserAnimationsModule,
    KaDochubUiModule,
    HttpClientModule,
   
  ],
  declarations: [AppComponent],
 
  bootstrap: [AppComponent],
})
export class AppModule { }
