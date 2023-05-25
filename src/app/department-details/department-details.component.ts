import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.scss'],
})
export class DepartmentDetailsComponent {
  deptId: any;

  constructor(private activateRoute: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    // this.deptId = this.activateRoute.snapshot.paramMap.get('id');
    this.activateRoute.paramMap.subscribe((params: ParamMap) => {
      this.deptId = params.get('id')
    })

  }
  goNex() {
    let nextId = parseInt(this.deptId) + 1;
    this.router.navigate(["/department", nextId]);
  }

  goPrev() {
    let prevId = parseInt(this.deptId) - 1;
    this.router.navigate(["/department", prevId]);
  }

  goToDepartment() {
    this.router.navigate(['/department', { id: this.deptId }])
  }


  goToOverView() {
    this.router.navigate(['overview'], { relativeTo: this.activateRoute })
  }
  
  goToOverContact() {
    this.router.navigate(['contact'], { relativeTo: this.activateRoute })

  }



}