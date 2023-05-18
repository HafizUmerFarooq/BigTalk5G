import { Component, Input } from '@angular/core';
import { IProductsProps } from 'src/app/models/products.model';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.scss']
})
export class FilterProductComponent {
  @Input() label: string = "";
  value: number[] = [20, 40];
  checked: boolean = false;
  filters: any = {}

  public filterOptions: IProductsProps[] = [
    { propId: 1, propName: 'Giga Galisha', selectOptions: [{ name: '4G', code: '4' }, { name: '5G', code: '5' }] },
    { propId: 2, propName: 'Minutes of conversation', selectOptions: [{ name: '500 Minutes', code: '500' }, { name: '600 Minutes', code: '600' }] },
    { propId: 3, propName: 'SMS', selectOptions: [{ name: '70 Chars', code: '70' }, { name: '80 Chars', code: '80' }, { name: '120 Chars', code: '120' }, { name: 'UN LIMIT Chars', code: 'unLimit' }] },
    { propId: 4, propName: 'validity', selectOptions: [{ name: '70 ', code: '70' }, { name: '80', code: '80' }, { name: '120', code: '120' }] }
  ];

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
     this.filters = {...config.data.filters}
  }
  

  onSelectedValuesChange(event: { label: string, selectedValues: any[] }) {
    const { label, selectedValues } = event;
    if(!selectedValues.length){
      delete this.filters[label]
      return
    }
    this.filters[label] = selectedValues
  }

  filter(){
    this.ref.close(this.filters);
  }

}
