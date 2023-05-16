import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent {
  @Input() label:string = '';
  @Input() selectedValues: any[] = [];
  @Input() options: any[] = [];
  @Output() selectedValuesChange: EventEmitter< {label: string, selectedValues: any[] }> = new EventEmitter< {label: string, selectedValues: any[]} >();
  
  onSelectionChange() {
    this.selectedValuesChange.emit( {label: this.label, selectedValues: this.selectedValues });
  }
}
