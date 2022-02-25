import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AxiosInstance } from 'axios';
import axios from 'axios';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistrationComponent } from './registration/registration.component';

import { HearderComponent } from './_directive/hearder/hearder.component';
import { FooterComponent } from './_directive/footer/footer.component';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RentComponent } from './_directive/rent/rent.component';
import { AboutComponent } from './_directive/about/about.component';
import { ContactComponent } from './_directive/contact/contact.component';
import { ForgotComponent } from './_directive/forgot/forgot.component';
import { EquimentComponent } from './_directive/equiment/equiment.component';
import { ListingComponent } from './_directive/listing/listing.component';
import { DeshboardComponent } from './deshboard/deshboard.component';
import { SingleComponent } from './_directive/single/single.component';
import { MachineHubComponent } from './_directive/machine-hub/machine-hub.component';

// import { fatch } from './utile';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HearderComponent,
    FooterComponent,
    LoginComponent,
    RentComponent,
    AboutComponent,
    ContactComponent,
    ForgotComponent,
    EquimentComponent,
    ListingComponent,
    DeshboardComponent,
    SingleComponent,
    MachineHubComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
