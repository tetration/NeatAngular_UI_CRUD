import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { NotificationService } from '../notification.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  Employee: any = [];

  constructor(
    public restApi: RestApiService,
    private notifyService : NotificationService
  ) { }

  ngOnInit() {
    this.loadEmployees()
  }

  // Get employees list
  loadEmployees() {
    return this.restApi.getEmployees().subscribe((data: {}) => {
      this.Employee = data;
    })
  }

  // Delete employee
  deleteEmployee(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteEmployee(id).subscribe(data => {
        this.loadEmployees()
        this.showToasterInfo(`Deletado com êxito`,`Funcionário deletado do banco` );
      })
    }
  }  

  showToasterInfo(t,m){
    this.notifyService.showInfo(t, m)
}

}