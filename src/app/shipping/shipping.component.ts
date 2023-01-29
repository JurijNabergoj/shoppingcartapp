import { Component, EventEmitter, Output } from '@angular/core';
import { Shipping, shipping } from '../shipping';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent {
  shippings = shipping;
  selectedType!: String;
  @Output() shippingSelected = new EventEmitter<Shipping>();

  constructor() {}

  selectOption(ship: Shipping) {
    this.selectedType=ship.type;
    this.shippingSelected.emit(ship);
    console.log("emitted")
  }
}
