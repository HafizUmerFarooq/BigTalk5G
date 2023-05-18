import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-create-product-wizard',
  templateUrl: './create-product-wizard.component.html',
  styleUrls: ['./create-product-wizard.component.scss'],
})
export class CreateProductWizardComponent {
  public showDescOptions: boolean = false;
  public showTextOptions: boolean = false;
  public showSMScOptions: boolean = false;
  public showSurfingOptions: boolean = false;
  language: string[] = ['עברית', 'عربيه', 'English'];
  @Output() saveProductForm: EventEmitter<any> = new EventEmitter();

  public productProps:any = {
    desc: {},
    price: '',
    sms: {},
    property: ['test'],
    freeText: {},
    surfing: {},
    purchasePrice: '',
    priceType: '',
  };

  constructor() {}

  ngOnInit(): void {}

  submitForm() {
    const finalResult = {
      id: '',
      price: this.productProps.price,
      productDescTranslations: [
        this.productProps.desc,
        this.productProps.sms,
        this.productProps.freeText,
        this.productProps.surfing,
      ],
    };
    this.saveProductForm.emit(finalResult);
  }
}
