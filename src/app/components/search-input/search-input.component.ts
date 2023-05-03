import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { FilterProductComponent } from '../filter-product/filter-product.component';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  values: string[] = ["text","text 2"];

  constructor(
    public dialogService: DialogService,
  ) { }

  filterEvent(){
    const ref = this.dialogService.open(FilterProductComponent, {
      width: "20%",
      height: "30%",
      data: { },
    });

    // ref.onClose.subscribe((res) => {
    //   if (res) {
        
    //   }
    // });
  }

  clearFilterEvent(){
    this.values = [];
  }

}
