import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import{ReactiveFormsModule}from '@angular/forms';
// import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderComponent } from './form-builder/form-builder.component';

const routes: Routes = [
  { path: 'heroes', component: FormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormBuilderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    // AppRoutingModule,
    RouterModule,
  RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 appRoutes:Routes;
 
}