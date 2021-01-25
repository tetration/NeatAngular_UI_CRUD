import {  Component, OnInit, NgModule } from '@angular/core';
import { AccountService } from '../shared/account.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {RestApiService} from '../../shared/rest-api.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginExists = false;
  
  //Accounts = this.loadAccounts();
  login = {
    name: '',
    password:''
  };
  Account: any = [];
  constructor(
    private accountService: AccountService,
    private router: Router,
    public restApi: RestApiService
  ) { }

  ngOnInit(): void {
  }

  async onSubmit(){
    console.log(this.login);
    var credentials=this.login;
    
    try {
      var tf= this.loadAccounts(credentials);
      const result = await this.accountService.login(this.login);
      console.log(`Login efetivado com sucesso: ${result}`);
      // navigate to an empty route again
      this.router.navigate(['']);
    } catch (error){
      console.error(error);
    }
  }

  loadAccounts(credentials) {
    var tf=false;
    var name= credentials.name;
    var password= credentials.password;
    this.Account= this.restApi.getAccountByNameAndPass(this.Account.name,this.Account.password);
    if(credentials==this.Account){
      tf=true;
    }
    return tf;
  }
}
