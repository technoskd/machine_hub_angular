import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponent } from './registration/registration.component';
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

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'rent', component: RentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: '', component: EquimentComponent },
  { path: 'listing', component: ListingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'deshboard', component: DeshboardComponent },
  { path: 'single/:id', component: SingleComponent },
  { path: 'machine_hub/:id', component: MachineHubComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
