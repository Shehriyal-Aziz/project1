import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  imports: [CommonModule,FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  searchTerm:any;
  mobile:boolean = false;
  laptop:boolean = false;
  desktop:boolean = false;

   search(){
    if(this.searchTerm == "mobile"){
      this.mobile = true;
      this.laptop = false;
      this.desktop = false;
    }
    else if(this.searchTerm == "laptop"){
      this.mobile = false;
      this.laptop = true;
      this.desktop = false;
    }
    else if(this.searchTerm == "desktop"){
      this.mobile = false;
      this.laptop = false;
      this.desktop = true;
    }
    else{
      this.mobile = false;
      this.laptop = false;
      this.desktop = false;
    }
   }
}
