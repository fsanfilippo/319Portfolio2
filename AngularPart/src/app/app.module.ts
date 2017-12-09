import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { HerosComponent } from './heros/heros.component';
import { HeroService } from './hero.service';
import { AddressComponent } from './address/address.component';


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
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
