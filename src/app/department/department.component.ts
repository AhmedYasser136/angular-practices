import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent {
  department = [
    { "id": 1, "name": "angular" },
    { "id": 2, "name": "react" },
    { "id": 3, "name": "nodejs" },
    { "id": 4, "name": "js" },
    { "id": 5, "name": "es6" },
  ]
  selectId: any
  constructor(private router: Router, private activateRoute: ActivatedRoute) {

  }
  goToDepartmentDetails(deptId: any) {
    this.router.navigate(["/department", deptId])

  }
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params: ParamMap) => {
      this.selectId = params.get('id')
    })
  }

}
