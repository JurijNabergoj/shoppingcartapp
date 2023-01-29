import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { Product } from '../products';
import { Shipping } from '../shipping';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  selectedShipping!: Shipping;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  receiveMessage($event: Shipping) {
    this.selectedShipping = $event;
  }
  resetMessage() {
    this.selectedShipping;
  }
  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.log('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  finishPurchase() {
    window.alert('Thank you for your purchase!');
    setTimeout(() => {
      this.router.navigate(['']);
    }, 10);
  }
  clearCart() {
    this.items = this.cartService.clearCart();
    window.alert('Cart cleared');
  }
  removeFromCart(product: Product) {
    this.items = this.cartService.removeFromCart(product);
  }
  calculateTotal() {
    var sumNumber = this.items.reduce((acc, cur) => acc + cur.price, 0);
    return sumNumber;
  }
}
