import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/model/Cart';
import { cartItem } from '../shared/model/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
    cart!: Cart;
  constructor(private cartServices: CartService,) { 
           this.setCart();
 
  }

  ngOnInit(): void {
  }
  setCart(){
    this.cart = this.cartServices.getCart();
  }
  removeFromCart(CartItem: cartItem){
    this.cartServices.removeFromCart(CartItem.food.id);
    this.setCart();
  }
  changeQuantity(CartItem:cartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartServices.changeQuantity(CartItem.food.id, quantity);
    this.setCart();
  }
}
