import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
   numbers = [{content: 0}];
   addEvenNumber 
   addOddNumber 

   onNewNumberGenerated(newData:{newNumber:number}) {
    this.numbers.push({
      content: newData.newNumber
      
    });

    if (Number(newData.newNumber)%2 == 0){
      this.addEvenNumber = [{evenNumber:Number(newData.newNumber)}];
    }else{
      this.addOddNumber = [{oddNumber:Number(newData.newNumber)}];
    }
  }
    
}
