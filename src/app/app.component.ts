import { Component, Input, Output } from '@angular/core';
import { Keg } from './models/keg.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tap Room';

  masterKegsList: Keg[] = [
    new Keg("Fuzztail", "Sunriver", "5", "5.0"),
    new Keg("Mosaic Pale", "Backwoods", "6", "4.7"),
    new Keg("Tarty to the Party", "Wild Ride", "6", "6.3"),
    new Keg("Full of Fire", "Wayfinder", "9", "7.0")
  ];

  addKeg(newKeg: Keg) {
    this.masterKegsList.push(newKeg);
  }

}
