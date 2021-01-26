import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";
import { NotificationService } from '../notification.service';
@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {

  @Input() employeeDetails = { name: '', email: '', phone: 0 }

  constructor(
    public restApi: RestApiService, 
    public router: Router,
    private notifyService : NotificationService
  ) { }

  ngOnInit() { }

  addEmployee() {
    this.restApi.createEmployee(this.employeeDetails).subscribe((data: {}) => {
      this.showToasterSuccess(`Cadastrado com êxito`,`Funcionário: ${this.employeeDetails.name}` );
      this.router.navigate(['/employee-list'])
    })
  }

  showToasterSuccess(t,m){
    this.notifyService.showSuccess(t, m)
}

}