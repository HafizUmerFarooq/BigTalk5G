import { Component, Input } from '@angular/core';
import { IProducts } from 'src/app/models/products.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() products: IProducts[] = [];

  productClickEvent(record:IProducts){
    console.log('record: ', record);
  }
}
