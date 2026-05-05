import { Component,OnInit } from '@angular/core';
import { Service } from '../service';
import { NgForOf } from "@angular/common";


@Component({
  selector: 'app-compo1',
  imports: [NgForOf],
  templateUrl: './compo1.html',
  styleUrl: './compo1.css',
})
export class Compo1 implements OnInit {
  constructor(private ser:Service) {

  }
  myarr: any[] = [];
  ngOnInit():void {
    this.ser.data().then(data => {
      this.myarr = data;
    })
  }
}

