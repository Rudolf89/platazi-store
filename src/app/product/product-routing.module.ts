import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { ProductDetailComponent } from './component/product-detail/product-detail.component'
import { ProductsComponent } from './component/products/products.component';

const routes: Routes = [
    {
        path:'',
        component: ProductsComponent
    },
    {
        path:':id',
        component: ProductDetailComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})

export class ProductRoutingModule {}