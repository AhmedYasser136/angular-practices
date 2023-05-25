import { Component } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent {


  textColor: string = "text-success"

  hasError: boolean = false


  hasError2: boolean = true
  hasSpecial: boolean = true

  messageClass = {
    "text-success ": !this.hasError2, // work if hass error2 >>false
    "text-danger": this.hasError2,    // work if hass error2 >>true
    "text-special": this.hasSpecial   // work if hass special >>true
  }



}
