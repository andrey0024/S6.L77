import { 
  Component,
  OnInit,
  Input,
  AfterContentChecked
 

} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css'],

})
export class EvenComponent implements 
OnInit,AfterContentChecked
{
  
  @Input ('evenNumber' ) num : {even_Number:number}
 
  app_evenNumbers = [];

  constructor() { }

  ngOnInit() {  }  
  
  ngAfterContentChecked() {
     if ((this.num[0].evenNumber%2)==0) this.app_evenNumbers.push(this.num[0].evenNumber);  
     delete this.num[0].evenNumber;
  }


}
