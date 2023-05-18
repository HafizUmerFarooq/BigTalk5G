import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  @Input() showBigTitle: boolean = true;
  @Input() imageUrl: string = '';
  @Input() title: string = '';
}
