import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../../shared/rest-api.service";
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.sass']
})
export class CreateAccountComponent implements OnInit {

  @Input() accountDetails = {name: '', email: '', password: ''}
  constructor(
    public restApi: RestApiService, 
    public router: Router,
  ) { }

  ngOnInit(): void {
  }
  
  addAccount(dataAccount) {
    this.restApi.createAccount(this.accountDetails).subscribe((data: {}) => {
      this.router.navigate(['/login'])
    })
  }
  goBack() {
      this.router.navigate(['/login']);
  }
}

