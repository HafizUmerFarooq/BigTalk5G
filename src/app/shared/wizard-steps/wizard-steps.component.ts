import { Component, Input } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-wizard-steps',
  templateUrl: './wizard-steps.component.html',
  styleUrls: ['./wizard-steps.component.scss']
})
export class WizardStepsComponent {
  @Input() stepList: MenuItem[] = [];
  previousIndex:number = 0;
  activeIndex: number = 0;

  constructor(public messageService: MessageService) {}

  onActiveIndexChange(event:any) {
   const stepList = Array.prototype.slice.call(document.getElementsByTagName("li"));

   setTimeout(()=>{
    for (let i = 0; i < stepList.length; i++) {
      if(stepList[i].classList.contains("p-steps-current")){
        stepList[i + 1].setAttribute("id","");
        break
      } else {
        stepList[i].setAttribute("id","previous-highlighted");
      }
    }
   }, 50)
   
    this.activeIndex = event;
    this.previousIndex = event;
  }

  ngOnInit() { }
}
