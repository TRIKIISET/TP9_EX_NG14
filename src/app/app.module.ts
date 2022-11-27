import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProduitComponent } from './Application/addproduit/produit.component';
import { EmployeComponent } from './EXERCICE/employe/employe.component';
import { HttpClientModule}  from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    EmployeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
