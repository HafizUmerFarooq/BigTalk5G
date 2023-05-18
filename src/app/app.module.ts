import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from 'primeng/card';
import { productsComponent } from './pages/home/products.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { FilterProductComponent } from './components/filter-product/filter-product.component';
import { DialogService } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'primeng/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { ChipsModule } from 'primeng/chips';
import { ChipModule } from 'primeng/chip';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { TooltipModule } from 'primeng/tooltip';

import { KeysPipe } from './keys.pipe';

import { LogoComponent } from './shared/logo/logo.component';
import { WizardStepsComponent } from './shared/wizard-steps/wizard-steps.component';
import { StepsModule } from 'primeng/steps';
import { MessageService } from 'primeng/api';
import { ProductWizardComponent } from './pages/product-wizard/product-wizard.component';
import { CreateProductWizardComponent } from './components/create-product-wizard/create-product-wizard.component';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    AppComponent,
    productsComponent,
    ProductCardComponent,
    SearchInputComponent,
    FilterProductComponent,
    MultiSelectComponent,

    KeysPipe,

    LogoComponent,
    WizardStepsComponent,
    ProductWizardComponent,
    CreateProductWizardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
    SliderModule,
    FormsModule,
    MultiSelectModule,
    ChipsModule,
    InputSwitchModule,
    TooltipModule,
    ChipModule,
    StepsModule,
    ReactiveFormsModule,
    DropdownModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DialogService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
