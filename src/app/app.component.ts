import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularQuizApp';

  choice: any = '';
  choiceArray: any = [];
  arr: MyArrayType = [
    { id: "1",
      question: "Which of the following is your favourite",
      options: [{ id: "1",select: false, value: "HTML"}, { id: "2",select: false, value: "CSS"}, { id: "3",select: false, value: "JS"}],
      correctOption: "JS"
    },
    {
      id: "2",
      question: "Which city do you belong to",
      options: [{ id: "1", select: false, value: "Pune"}, { id: "2", select: false, value: "Mumbai"}],
      correctOption: "Pune"
    }
  ];

  onRadioChange(event:any, id1:string){
    this.choice = event.target.value;

    for (let i = 0; i< this.arr.length; i++){
      if (this.arr[i].id === id1) {
        for (let j = 0; j < this.choiceArray.length; j++) {
          for (let k = 0; k < this.arr[i].options.length; k++) {
            if (this.arr[i].options[k].value === this.choiceArray[j] ) {
              this.choiceArray.splice(j,1);
            }
          }
        }
      }
    }
    this.choiceArray.push(this.choice);
    console.log(this.choiceArray);
  }
}
type MyArrayType = Array<{id: string, question: string, options: any, correctOption: string}>;
