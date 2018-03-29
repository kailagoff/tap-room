import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model'

@Component({
  selector: 'app-add-keg',
  templateUrl: './add-keg.component.html',
  styleUrls: ['./add-keg.component.css']
})
export class AddKegComponent {
  @Output() sendKeg = new EventEmitter();
  @Output() clickedDone = new EventEmitter();

  submitForm(name: string, brand: string, price: string, alcoholContent: string, pints: number) {
    let newKeg: Keg = new Keg(name, brand, parseInt(price), parseInt(alcoholContent), pints);
    this.sendKeg.emit(newKeg);
  }

  finishedEditing() {
    this.clickedDone.emit();
  }
}
