import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Observable} from 'rxjs'
import { Product } from '../../../core/model/product.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  prducts$: Observable<Product[]>;

  constructor(
    private cartService: CartService
  ) {
    this.prducts$ = this.cartService.cart$;
   }

  ngOnInit(): void {
  }

}
