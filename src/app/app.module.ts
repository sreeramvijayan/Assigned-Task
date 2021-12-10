import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialsModule } from './materials/materials.module';
import { ArchwizardTestComponent } from './archwizard-test/archwizard-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { TestComponent } from './test/test.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxLoadingModule } from 'ngx-loading';



@NgModule({
  declarations: [
    AppComponent,
    ArchwizardTestComponent,
    TestComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialsModule,
    BrowserModule,
   FormsModule,
   CommonModule,HttpClientModule,
   ReactiveFormsModule,
   ArchwizardModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(), 
    NgxLoadingModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
