import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../core/model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productos: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fechtProducts();
  }

  fechtProducts(){
    this.productsService.getAllProducts()
    .subscribe(productos => {
      this.productos = productos;
    });
  }

  deleteProduct(id){
    this.productsService.deleteProduct(id)
    .subscribe(rta => {
      this.fechtProducts();
    });
  }
}
