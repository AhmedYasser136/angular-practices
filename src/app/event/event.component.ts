import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {







  
  message: string = "";
  showMessage(event:any) {
    this.message = "hi";
    
    
    
    // console.log(event)
    // console.log("hello");
  }

















  printMessage(message:any){
    // console.log(message)
  }

}
