import { Component } from '@angular/core';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-gallery',
  imports: [NgIf],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  laptop: boolean = true;
  mobile: boolean = true;

  laptopshow() {
    this.laptop = true;
    this.mobile = false;
  }
  mobileshow() {
    this.laptop = false;
    this.mobile = true;
  }

  allshow() {
    this.laptop = true;
    this.mobile = true;
  }
}
