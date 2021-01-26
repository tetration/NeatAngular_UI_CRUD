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
    var tf=false;
    console.log(this.login);
    var credentials=this.login;

    try {
      tf=this.checkCredentials(credentials);
      const result = await this.accountService.login(this.login);
      console.log(`Login efetivado com sucesso: ${result}`);
      if(tf==true){

      }else{
        console.log("Erro login inválido")
      }
      // navigate to an empty route again
      this.router.navigate(['']);
    } catch (error){
      console.error(error);
    }
  }

  checkCredentials(credentials) {
    var tf=false;
    var name= credentials.name;
    var password= credentials.password;
    tf=this.checkIfAccountExists(name,password);
    return tf;
  }
  checkIfAccountExists(name, password) {
    var tf=false;
    var users;

       this.restApi.getAccounts().subscribe((data: {}) => {
        this.Account = data;
      });
      users= this.Account;
    this.Account=this.restApi.getAccounts().forEach((data: {}) => {

      this.Account=data;
    });
    for (i=0; users.length; i++ ){
      var i=0;
      console.log(users);
      if(users[i].username == name && users[i].password == password){
        tf = true;
        break;
      }
      i++;
    }
    return tf
  }
}
