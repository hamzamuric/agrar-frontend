import { Component } from '@angular/core';
import { Parcela, Vocnjak } from '../models';
import { ImovinaService } from '../imovina.service';

@Component({
  selector: 'app-imovina',
  templateUrl: './imovina.component.html',
  styleUrls: ['./imovina.component.css']
})
export class ImovinaComponent {
  constructor(private imovinaService: ImovinaService) {}

  ngOnInit() {
    this.imovinaService.getParcele().subscribe(parcele => {
      console.log('parcele got: ', parcele);
      for (const p of parcele) {
        p.vocnjaci = (p as any).vocnjaks as Vocnjak[];
        for (const v of p.vocnjaci) {
          v.poljoprivrednoDobro.datumSadnice = new Date(v.poljoprivrednoDobro.datumSadnice);
        }
      }
      this.parcele = parcele;
    })
  }

  povrsina: number = 0;
  brojParcele: number = 0;

  izbrisiParcelu() {
    const id = this.selectedParcela?.id;
    if (!id) {
      return;
    }

    this.imovinaService.deleteParcela(id).subscribe(p => {
      this.parcele = this.parcele.filter(p => p.id !== id);
      this.selectedParcela = undefined;
    })
  }

  createParcela() {
    const parcela = { povrsina: this.povrsina, brojParcele: this.brojParcele };
    this.imovinaService.createParcela(parcela as Parcela).subscribe(p => {
      this.imovinaService.getParcele().subscribe(parcele => {
        console.log('parcele got: ', parcele);
        for (const p of parcele) {
          p.vocnjaci = (p as any).vocnjaks as Vocnjak[];
          for (const v of p.vocnjaci) {
            v.poljoprivrednoDobro.datumSadnice = new Date(v.poljoprivrednoDobro.datumSadnice);
          }
        }
        this.parcele = parcele;
      })
    });
  }

  tipVocnjaka: string = '';

  dodajVocnjakServer() {
    // const vocnjak = { tip: this.tipVocnjaka, parcelaId: this.selectedParcela?.id };
    // this.imovinaService.dodajVocnjak(vocnjak).subscribe(v => {
    //   this.imovinaService.getParcele().subscribe(parcele => {
    //     console.log('parcele got: ', parcele);
    //     for (const p of parcele) {
    //       p.vocnjaci = (p as any).vocnjaks as Vocnjak[];
    //       for (const v of p.vocnjaci) {
    //         v.poljoprivrednoDobro.datumSadnice = new Date(v.poljoprivrednoDobro.datumSadnice);
    //       }
    //     }
    //     this.parcele = parcele;
    //   })
    // });
    const vocnjaci: Vocnjak[] = [
      { id: 1, tip: 'plastenik', poljoprivrednoDobro: {
        id: 1, datumSadnice: new Date(), naziv: 'jabuka', sorta: 'zelena', zivotniVek: 2, vremeSazrevanja: 1, minimalniPotencijalDavanja: 120, maksimalniPotencijalDavanja: 150,
      }}
    ];

    this.selectedParcela!.vocnjaci = vocnjaci;
  }

  columnsToDisplay = ['brojParcele', 'povrsina'];
  columnsToDisplayVocnjak = ['id', 'tip'];

  parcele: Parcela[] = [
    { id: 0, brojParcele: 1, povrsina: 100, vocnjaci: [
      { id: 1, tip: 'plastenik', poljoprivrednoDobro: {
        id: 1, datumSadnice: new Date(), naziv: 'jabuka', sorta: 'zelena', zivotniVek: 2, vremeSazrevanja: 1, minimalniPotencijalDavanja: 120, maksimalniPotencijalDavanja: 150,
      }}
    ]},
  ];

  selectedParcela?: Parcela = this.parcele[0];
  selectedVocnjak?: Vocnjak = this.selectedParcela?.vocnjaci[0];
  editing: boolean = false;
  addingParcela: boolean = false;
  addingVocnjak: boolean = false;

  rowClick(row: Parcela) {
    if (this.selectedParcela === row) {
      this.selectedParcela = undefined;
    } else {
      this.selectedParcela = row;
    }
    this.selectedVocnjak = undefined;
    this.editing = false;
    this.addingParcela = false;
    this.addingVocnjak = false;
  }

  rowClickVocnjak(row: Vocnjak) {
    if (this.selectedVocnjak === row) {
      this.selectedVocnjak = undefined;
    } else {
      this.selectedVocnjak = row;
    }
    this.editing = false;
    this.addingParcela = false;
    this.addingVocnjak = false;
  }

  formatDate(date: Date) {
    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}.`
  }

  izmeniVocnjak() {
    this.editing = true;
  }

  odbaci() {
    this.editing = false;
  }

  dodajParcelu() {
    this.editing = false;
    this.selectedParcela = undefined;
    this.selectedVocnjak = undefined;
    this.addingParcela = true;
  }

  odbaciParcelu() {
    this.editing = false;
    this.addingParcela = false;
  }

  dodajVocnjak() {
    this.editing = false;
    this.selectedVocnjak = undefined;
    this.addingVocnjak = true;
  }

  odbaciVocnjak() {
    this.editing = false;
    this.addingVocnjak = false;
  }
}
