import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-product-wizard',
  templateUrl: './product-wizard.component.html',
  styleUrls: ['./product-wizard.component.scss'],
})
export class ProductWizardComponent {
  stepList: MenuItem[] = [{}, {}, {}, {}];

  saveProductForm(event:any){
    console.log('saveProductForm: ', event);
  }
}
