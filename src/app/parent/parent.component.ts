import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {


  message: string = "hello child from parent";
  // -----------------------------------------
  messageFromChild: any;


  @ViewChild(ChildComponent) child: ChildComponent;

  ngAfterViewInit() {
    this.child.whoAmI()
  }
}
