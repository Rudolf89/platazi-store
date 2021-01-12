import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './component/product/product.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[
        ProductComponent
    ],
    imports:[
        CommonModule,
        SharedModule
    ]
})
export class ProductModule{}