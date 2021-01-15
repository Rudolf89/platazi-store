import { from } from 'rxjs';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../core/model/product.model';
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {

    @Input() producto: Product;
    @Output() productClick: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor(
        private cartService: CartService
    ){}

    addCart() {
        console.log('añadir al carrito');
        this.cartService.addCart(this.producto);
        // this.productClick.emit(this.producto.id);
    }
}
