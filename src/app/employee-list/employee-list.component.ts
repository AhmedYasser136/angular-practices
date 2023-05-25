import { Component } from '@angular/core';
import { EmployeeService } from 'src/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})


export class EmployeeListComponent {
  employees: any = []
  errorMessage:any 
  constructor(private employeeService: EmployeeService) { }
  ngOnInit(): void {


    // // this.employees = this.employeeService.getEmployees()
    // this.employeeService.getEmployees().subscribe(
    //   data=>{
    //     this.employees = data
    //   }
    // )

    this.employeeService.getEmployees().subscribe({

      next: data => this.employees = data,
      error: error => this.errorMessage = error

    })


  }
}
