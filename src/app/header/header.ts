import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, NgIf,FormsModule,RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})

export class Header {
  search: boolean = false;
  searchbar:any;
  Showsearch(){
    if(this.search == false){
      this.search = true;
    }
    else{
      this.search = false;
    }
  }
}
