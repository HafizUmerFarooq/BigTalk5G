import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent {
  @Input() label:string = '';
  selectedCities: any[] = [{name: 'New York', code: 'NY'}];
  @Input() cities: any[] = [];
}
