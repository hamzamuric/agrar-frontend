import { Component } from '@angular/core';
import { Korisnik, Subvencija } from '../models';

@Component({
  selector: 'app-subvencije',
  templateUrl: './subvencije.component.html',
  styleUrls: ['./subvencije.component.css']
})
export class SubvencijeComponent {
  zahtevi: Subvencija[] = [
    { id: 1, naziv: 'Prva subvencija', korisnik: { ime: 'Hamza', prezime: 'Muric' } as unknown as Korisnik, ispravna: true, odobrena: false, pesticidi: [
      {id: 1, naziv: 'Misomor'}
    ] },
    { id: 1, naziv: 'Prva subvencija', korisnik: { ime: 'Hamza', prezime: 'Muric' } as unknown as Korisnik, ispravna: false, odobrena: false, pesticidi: [
      {id: 1, naziv: 'Misomor'}
    ] },
  ];
}
