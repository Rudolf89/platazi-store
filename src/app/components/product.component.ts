import { from } from 'rxjs';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
export class ProductComponent {

    @Input() producto: Product;
    @Output() productClick: EventEmitter<any> = new EventEmitter();

    addCart() {
        console.log('añadir al carrito');
        this.productClick.emit(this.producto.id);
    }
}
