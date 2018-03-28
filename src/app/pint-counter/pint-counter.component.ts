import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model'

@Component({
  selector: 'app-pint-counter',
  templateUrl: './pint-counter.component.html',
  styleUrls: ['./pint-counter.component.css']
})

export class PintCounterComponent {
  @Input() childSelectedKeg: Keg;
  @Output() clickPint = new EventEmitter();

}
