import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { CustomerGetService } from './get-customer/CustomerGetService';

import { AppComponent } from './app.component';
import { ClarityModule , ClrFormsNextModule  } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { GetCustomerComponent } from './get-customer/get-customer.component';
import { PostCustomerComponent } from './post-customer/post-customer.component';
import {MapToIterable} from '../app/get-customer/MapToIterable';
import { CallbackComponent } from './callback/callback.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GetCustomerComponent,
    PostCustomerComponent,
    CallbackComponent,
    HomeComponent,
    MapToIterable
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ClrFormsNextModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [AuthService, CustomerGetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
