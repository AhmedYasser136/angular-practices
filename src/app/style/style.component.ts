import { Component } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent {
  textcolor: string = "red"

  hasError: boolean = false


  mystyle = {
    color: "blue",
    font: "italic"

  }



}
