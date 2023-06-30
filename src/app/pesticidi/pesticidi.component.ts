import { Component } from '@angular/core';
import { Pesticid } from '../models';

@Component({
  selector: 'app-pesticidi',
  templateUrl: './pesticidi.component.html',
  styleUrls: ['./pesticidi.component.css']
})
export class PesticidiComponent {
  pesticidi: Pesticid[] = [
    { id: 1, naziv: 'misomor' },
    { id: 2, naziv: 'otrov' },
    { id: 2, naziv: 'otrov' },
    { id: 2, naziv: 'otrov' },
    { id: 2, naziv: 'otrov' },
    { id: 2, naziv: 'otrov' },
    { id: 2, naziv: 'otrov' },
    { id: 2, naziv: 'otrov' },
    { id: 2, naziv: 'otrov' },
    { id: 2, naziv: 'otrov' },
    { id: 2, naziv: 'otrov' },
  ];
}
