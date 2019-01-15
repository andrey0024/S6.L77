import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() newNumberGenerated = new EventEmitter<{newNumber:number}>();

  constructor() { 
    console.log('constructor called');
  }

  ngOnInit() {
  }

    timerId ;
    i=0;
    emitFunction(){
      this.newNumberGenerated.emit({ 
        newNumber: this.i
      })
      this.i++
    }

  onStartGame() {

    this.timerId = setInterval(()=>{
      this.emitFunction() },1000); 
    
  }

  onStopGame(){
    clearInterval(this.timerId);
    console.log('Game Stopped');
  }

}
