import { Component, inject } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [FormsModule,],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = '';
  password: string = '';

  router = inject(Router);

  giveaccess(){
    if(this.email=="admin" && this.password=="admin"){
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/api-fetch']);
    }
    else{
      alert("Login failed");
    }
  }
}
