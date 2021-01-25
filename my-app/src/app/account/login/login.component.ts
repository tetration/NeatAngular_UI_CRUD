import {  Component, OnInit, NgModule } from '@angular/core';
import { AccountService } from '../shared/account.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  login = {
    email: '',
    password:''
  };

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async onSubmit(){
    try {
      const result = await this.accountService.login(this.login);
      console.log(`Login efetivado com sucesso: ${result}`);
      // navigate to an empty route again
      this.router.navigate(['']);
    } catch (error){
      console.error(error);
    }
  }
}
