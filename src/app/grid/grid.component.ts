import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  colArray = [] as  any;
  rowArray = [] as  any;
  colums : any ;
  rows : any ;
  setDimension(){
     this.colArray = [] ;
     this.rowArray = [] ;
     for(let i = 1; i<= this.colums; i++){
        let l=i;
       this.colArray.push(i);
     }
     for(let i = 1; i<=this.rows; i++){
       this.rowArray.push(i);
     }
   }
   getStyles( number :any) {
     console.log("roumaissa");
     console.log(number)
     let color = ''
    if (number % 3 ==0 && number % 5 ==0) {color = 'yellow';}
    else if (number % 3 ==0) {color = 'red';}
    else if (number % 5 ==0) {color = 'green';}
    console.log(color)
    return color
    
}
}


