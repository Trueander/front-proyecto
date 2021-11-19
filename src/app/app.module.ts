import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CrmComponent } from './crm/crm.component';
import { HeaderComponent } from './header/header.component';
import { CrmFormComponent } from './crm/crm-form/crm-form.component';
import { FormsModule } from '@angular/forms';
import { EquifaxComponent } from './equifax/equifax.component';
import { EgresadosComponent } from './egresados/egresados.component';
import { ReniecComponent } from './reniec/reniec.component';

@NgModule({
  declarations: [
    AppComponent,
    CrmComponent,
    HeaderComponent,
    CrmFormComponent,
    EquifaxComponent,
    EgresadosComponent,
    ReniecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
