import { Component } from '@angular/core';

@Component({
  selector: 'app-inter',
  templateUrl: './inter.component.html',
  styleUrls: ['./inter.component.scss']
})
export class InterComponent {
fullname:string="ahmed";
url = window.location.href;
}
