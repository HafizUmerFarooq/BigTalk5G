import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { FilterProductComponent } from '../filter-product/filter-product.component';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  filters: any[] = [];


  constructor(
    public dialogService: DialogService,
  ) { }

  filterEvent(){
    const ref = this.dialogService.open(FilterProductComponent, {
      width: "20%",
      height: "30%",
      data: {filters:this.filters},
    });

    ref.onClose.subscribe((res) => {
      if (res) {
        this.filters = res
      }
    });
  }

  clearFilterEvent() {
    this.filters = [];
  }

  onChipRemove(item: any) {
    delete this.filters[item]
  }

}
