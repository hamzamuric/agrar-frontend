import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImovinaComponent } from './imovina/imovina.component';
import { KorisniciComponent } from './korisnici/korisnici.component';
import { PesticidiComponent } from './pesticidi/pesticidi.component';
import { SubvencijeComponent } from './subvencije/subvencije.component';
import { RegistracijaComponent } from './registracija/registracija.component';

const routes: Routes = [
  { path: 'registracija', component: RegistracijaComponent },
  { path: 'imovina', component: ImovinaComponent },
  { path: 'korisnici', component: KorisniciComponent },
  { path: 'pesticidi', component: PesticidiComponent },
  { path: 'subvencije', component: SubvencijeComponent },
  { path: '',   redirectTo: '/registracija', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
