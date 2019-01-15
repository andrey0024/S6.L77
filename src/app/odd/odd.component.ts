import { Component, OnInit, Input,  AfterContentChecked, } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit,   AfterContentChecked {

  constructor() { }

  @Input ('oddNumber' ) num : {odd_Number:number}

  app_oddNumbers = [];

  ngOnInit() {
   
  }

  ngAfterContentChecked() {

     if ((this.num[0].oddNumber%2)==1) this.app_oddNumbers.push(this.num[0].oddNumber);  
     delete this.num[0].oddNumber
  }

}
