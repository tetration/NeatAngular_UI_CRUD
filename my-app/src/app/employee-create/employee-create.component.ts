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

  @Input() employeeDetails = { name: '', email: '', phone: 0, internship: '',created:null, modified:null }

  constructor(
    public restApi: RestApiService, 
    public router: Router,
    private notifyService : NotificationService
  ) { }

  ngOnInit() { 
    this.employeeDetails.internship="Não";
  }

  addEmployee() {
    this.employeeDetails.created=new Date();
    this.employeeDetails.modified=new Date();

    this.restApi.createEmployee(this.employeeDetails).subscribe((data: {}) => {
      this.router.navigate(['/employee-list']);
      this.showToasterSuccess(`Cadastrado com êxito`,`Funcionário: ${this.employeeDetails.name}` );
    })
  }
  toggleEditable(event) {
    if ( event.target.checked ) {
      this.employeeDetails.internship= "Sim";
    }else{
      this.employeeDetails.internship= "Não";
    }
  }

  showToasterSuccess(t,m){
    this.notifyService.showSuccess(t, m)
}

}