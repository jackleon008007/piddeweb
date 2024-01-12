import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit{

  val:string="hola mundo";
  x:boolean= true;

  slides = [
    {'image': 'assets/home-slide-1.jpg'},
  ];

  currentSlide = 0;

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

  ngOnInit(): void {
    this.val = "hola peru";
  }

  isView(){
    return this.x;
  }

  ngAfterViewInit(): void {
  }

}
