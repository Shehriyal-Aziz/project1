import { Component,OnInit } from '@angular/core';
import { ApiCall } from '../api-call';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-api-fetch',
  imports: [CommonModule, NgFor],
  templateUrl: './api-fetch.html',
  styleUrl: './api-fetch.css',
})
export class ApiFetch implements OnInit {
  
  myarr: any[] = [];
  constructor(private sam: ApiCall) {


  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData()
  {
      this.sam.data().then((data) => {
      this.myarr = data;
    });
  }
}
