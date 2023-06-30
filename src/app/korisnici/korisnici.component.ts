import { Component } from '@angular/core';
import { Korisnik } from '../models';

@Component({
  selector: 'app-korisnici',
  templateUrl: './korisnici.component.html',
  styleUrls: ['./korisnici.component.css']
})
export class KorisniciComponent {
  korisnici: Korisnik[] = [
    { ime: 'Testerko', prezime: 'Testerovic', brojTelefona: '+381651231234', datumRodjenja: new Date(), email: 'test@erko.com', korisnickoIme: 'testiram', lozinka: 'password', pol: 'musko', odobrenaRegistracija: true, parcele: [] },
    { ime: 'Kesterko', prezime: 'Kesterovic', brojTelefona: '+381651231235', datumRodjenja: new Date(), email: 'kest@erko.com', korisnickoIme: 'kestiram', lozinka: 'password', pol: 'musko', odobrenaRegistracija: false, parcele: [] },
    { ime: 'Kesterko', prezime: 'Kesterovic', brojTelefona: '+381651231235', datumRodjenja: new Date(), email: 'kest@erko.com', korisnickoIme: 'kestiram', lozinka: 'password', pol: 'zensko', odobrenaRegistracija: false, parcele: [] },
    { ime: 'Kesterko', prezime: 'Kesterovic', brojTelefona: '+381651231235', datumRodjenja: new Date(), email: 'kest@erko.com', korisnickoIme: 'kestiram', lozinka: 'password', pol: 'zensko', odobrenaRegistracija: false, parcele: [] },
    { ime: 'Kesterko', prezime: 'Kesterovic', brojTelefona: '+381651231235', datumRodjenja: new Date(), email: 'kest@erko.com', korisnickoIme: 'kestiram', lozinka: 'password', pol: 'musko', odobrenaRegistracija: false, parcele: [] },
    { ime: 'Kesterko', prezime: 'Kesterovic', brojTelefona: '+381651231235', datumRodjenja: new Date(), email: 'kest@erko.com', korisnickoIme: 'kestiram', lozinka: 'password', pol: 'musko', odobrenaRegistracija: false, parcele: [] },
    { ime: 'Kesterko', prezime: 'Kesterovic', brojTelefona: '+381651231235', datumRodjenja: new Date(), email: 'kest@erko.com', korisnickoIme: 'kestiram', lozinka: 'password', pol: 'musko', odobrenaRegistracija: false, parcele: [] },
    { ime: 'Kesterko', prezime: 'Kesterovic', brojTelefona: '+381651231235', datumRodjenja: new Date(), email: 'kest@erko.com', korisnickoIme: 'kestiram', lozinka: 'password', pol: 'zensko', odobrenaRegistracija: false, parcele: [] },
    { ime: 'Kesterko', prezime: 'Kesterovic', brojTelefona: '+381651231235', datumRodjenja: new Date(), email: 'kest@erko.com', korisnickoIme: 'kestiram', lozinka: 'password', pol: 'musko', odobrenaRegistracija: false, parcele: [] },
    { ime: 'Kesterko', prezime: 'Kesterovic', brojTelefona: '+381651231235', datumRodjenja: new Date(), email: 'kest@erko.com', korisnickoIme: 'kestiram', lozinka: 'password', pol: 'musko', odobrenaRegistracija: false, parcele: [] },
  ];

  formatDate(date: Date) {
    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}.`
  }
}
