import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImovinaComponent } from './imovina/imovina.component';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { KorisniciComponent } from './korisnici/korisnici.component';
import { PesticidiComponent } from './pesticidi/pesticidi.component'
import { MatChipsModule } from '@angular/material/chips';
import { SubvencijeComponent } from './subvencije/subvencije.component';
import { FormsModule } from '@angular/forms';
import { RegistracijaComponent } from './registracija/registracija.component';

@NgModule({
  declarations: [
    AppComponent,
    ImovinaComponent,
    KorisniciComponent,
    PesticidiComponent,
    SubvencijeComponent,
    RegistracijaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatChipsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
