import { Component } from '@angular/core';
import { EmployeeService } from 'src/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent {
  employees: any = []
  errorMessage: any

  constructor(private employeeService: EmployeeService) { }
  ngOnInit(): void {
    // this.employees = this.employeeService.getEmployees()
    this.employeeService.getEmployees().subscribe({
      // data=>{
      //   this.employees= data;
      // }
      next: data => this.employees = data,
      error: error => this.errorMessage = error
    })
  }
}
