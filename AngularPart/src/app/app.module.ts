import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { HerosComponent } from './heros/heros.component';
import { AddressComponent } from './address/address.component';
import { AddressService } from './address.service';


@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
