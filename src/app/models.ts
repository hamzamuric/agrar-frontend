export interface Parcela {
  id: number;
  brojParcele: number;
  povrsina: number;
  vocnjaci: Vocnjak[];
}

export interface Vocnjak {
  id: number;
  tip: 'plastenik' | 'vrt';
  poljoprivrednoDobro: PoljoprivrednoDobro;
}

export interface PoljoprivrednoDobro {
  id: number;
  datumSadnice: Date;
  naziv: string;
  sorta: string;
  zivotniVek: number;
  vremeSazrevanja: number;
  minimalniPotencijalDavanja: number;
  maksimalniPotencijalDavanja: number;
}

export interface Korisnik {
  ime: string;
  prezime: string;
  email: string;
  pol: 'musko' | 'zensko';
  korisnickoIme: string;
  lozinka: string;
  brojTelefona: string;
  datumRodjenja: Date;
  odobrenaRegistracija: boolean;
  parcele: Parcela[];
}

export interface Pesticid {
    id: number;
    naziv: string;
}

export interface Subvencija {
    id: number;
    naziv: string;
    odobrena: boolean;
    ispravna: boolean;
    korisnik: Korisnik;
    pesticidi: Pesticid[];
}