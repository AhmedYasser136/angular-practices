import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  // @Input() parentData:any;
  @Input('parentData') messageFromParent: any;


  // -----------------------------------------------
  // from child to parent
  @Output() childEvent = new EventEmitter();


  sendData() {
    this.childEvent.emit("hello from child")
  }
  whoAmI(){
    console.log("iam child")
  }
}
