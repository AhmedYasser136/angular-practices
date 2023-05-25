import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
  topics = ["anglur", "react", "vue"]
  userModel = new User("", "", "", "")
  onSumit() {

  }

}
