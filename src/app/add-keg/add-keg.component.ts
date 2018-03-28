import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model'

@Component({
  selector: 'app-add-keg',
  templateUrl: './add-keg.component.html',
  styleUrls: ['./add-keg.component.css']
})
export class AddKegComponent {
  @Input() show: submitForm;
  @Output() sendKeg = new EventEmitter();

  submitForm(name: string, brand: string, price: string, alcoholContent: string) {
    let newKeg: Keg = new Keg(name, brand, parseInt(price), parseInt(alcoholContent));
    this.sendKeg.emit(newKeg);
  }
}
