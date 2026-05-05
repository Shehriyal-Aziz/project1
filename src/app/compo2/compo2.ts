import { Component } from '@angular/core';

@Component({
  selector: 'app-compo2',
  imports: [],
  templateUrl: './compo2.html',
  styleUrl: './compo2.css',
})
export class Compo2 {
  login(){
    let token: boolean = true;
      
    alert("login successful");
  }
}
