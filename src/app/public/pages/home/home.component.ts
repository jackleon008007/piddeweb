import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ICarouselItem} from "../../model/ICarouselItem";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit{


  @Input() height =500;
  @Input() isFullScreen = false;
  @Input() items:ICarouselItem[]=[
    {
      id:1,
      title:{
        first: 'TITULO',
        second:'Principal',
      },
      subtitle:'',
      link:'/',
      image:'assets/pidde-slide-1.jpg',
      marginLeft:0
    },
  ];



  public finalHeight: string|number=0;
  public currentPosition =0;
  constructor() {
    this.finalHeight = this.isFullScreen? '100vh' : `${this.height}px`;
  }
  ngOnInit(): void {
    this.items.map((i,index)=>{
      i.id = index;
      i.marginLeft =0;

    });
  }

  setCurrentPosition(positon:number){
    this.currentPosition =positon;
    // @ts-ignore
    this.items.find(i => i.id===0).marginLeft = -100 * positon;
  }
  setNext(){
    let finalPercentage =0;
    let nextPosition = this.currentPosition+1;
    if(nextPosition <= this.items.length-1){
      finalPercentage =-100*nextPosition;
    }else{
      nextPosition=0;
    }
    // @ts-ignore
    this.items.find(i =>i.id===0).marginLeft = finalPercentage;
    this.currentPosition = nextPosition;
  }
  setBack(){
    let finalPercentage =0;
    let backPosition = this.currentPosition-1;
    if(backPosition>=0){
      finalPercentage =-100*backPosition;
    }else{
      backPosition =this.items.length-1;
      finalPercentage = -100*backPosition;
    }
    // @ts-ignore
    this.items.find(i=>i.id===0).marginLeft= finalPercentage;
    this.currentPosition =backPosition;
  }




  ngAfterViewInit(): void {
  }

}
