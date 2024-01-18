import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angularQuizApp';

  choice: any = '';
  choiceArray: any = [];
  result = 0;
  arr: MyArrayType = [
    { id: "1",
      question: "Angular is primarily considered as?",
      options: [
      { id: "1",select: false, value: "JavaScript Framework"},
      { id: "2",select: false, value: "CSS Framework"},
      { id: "3",select: false, value: "Content management system"},
      { id: "4",select: false, value: "Database System"}
      ],
      correctOption: "JavaScript Framework"
    },
    { id: "2",
      question: "Which of the following is a core component in an Angular application?",
      options: [
      { id: "1",select: false, value: "ViewController"},
      { id: "2",select: false, value: "Directive"},
      { id: "3",select: false, value: "Activity"},
      { id: "4",select: false, value: "Observer"}
      ],
      correctOption: "Directive"
    },
    { id: "3",
      question: "How do you bind data to an attribute in Angular?",
      options: [
      { id: "1",select: false, value: "{{variable}}"},
      { id: "2",select: false, value: "(variable)"},
      { id: "3",select: false, value: "[variable]"},
      { id: "4",select: false, value: "=variable="}
      ],
      correctOption: "[variable]"
    },
    { id: "4",
      question: "Which Angular decorator is used to listen to DOM events?",
      options: [
      { id: "1",select: false, value: "@Output()"},
      { id: "2",select: false, value: "@Input()"},
      { id: "3",select: false, value: "@Event()"},
      { id: "4",select: false, value: "@HostListener"}
      ],
      correctOption: "@HostListener"
    },
    { id: "5",
      question: "What does a pipe do in Angular?",
      options: [
      { id: "1",select: false, value: "Connects two components"},
      { id: "2",select: false, value: "Transforms data in the template"},
      { id: "3",select: false, value: "Merges streams of data"},
      { id: "4",select: false, value: "Opens a direct connection to the server"}
      ],
      correctOption: "Transforms data in the template"
    },
    { id: "6",
      question: "Which decorator allows communication from a child component to its parent?",
      options: [
      { id: "1",select: false, value: "@Output()"},
      { id: "2",select: false, value: "@Input()"},
      { id: "3",select: false, value: "@ViewChild()"},
      { id: "4",select: false, value: "@Connect()"}
      ],
      correctOption: "@Output()"
    },
    { id: "7",
      question: "How can you generate a new service using Angular CLI?",
      options: [
      { id: "1",select: false, value: "ng create service my-service"},
      { id: "2",select: false, value: "ng generate service my-service"},
      { id: "3",select: false, value: "ng new service my-service"},
      { id: "4",select: false, value: "ng add service my-service"}
      ],
      correctOption: "ng generate service my-service"
    },
    { id: "8",
      question: "What is the use of Angular Directives?",
      options: [
      { id: "1",select: false, value: "To inject services"},
      { id: "2",select: false, value: "To initialize component state"},
      { id: "3",select: false, value: "To manipulate the DOM elements"},
      { id: "4",select: false, value: "To store data"}
      ],
      correctOption: "To manipulate the DOM elements"
    },
    { id: "9",
      question: "Which Angular decorator is used for making a class a root module?",
      options: [
      { id: "1",select: false, value: "@Module()"},
      { id: "2",select: false, value: "@Component()"},
      { id: "3",select: false, value: "@Directive()"},
      { id: "4",select: false, value: "@Ng Module()"}
      ],
      correctOption: "@Ng Module()"
    },
    {
      id: "10",
      question: "Which is the correct syntax for an Angular Event binding?",
      options: [
      { id: "1", select: false, value: '{click}="doSomething()"'},
      { id: "2", select: false, value: 'on-click="doSomething()"'},
      { id: "3",select: false, value: '(click)="doSomething()"'},
      { id: "4",select: false, value: 'click[]="doSomething()"'}
      ],
      correctOption: '(click)="doSomething()"'
    }
  ];

  onRadioChange(event:any, id1:string){
    this.choice = event.target.value;

    for (let i = 0; i< this.arr.length; i++){
      if (this.arr[i].id === id1) {
        for (let j = 0; j < this.choiceArray.length; j++) {
          for (let k = 0; k < this.arr[i].options.length; k++) {
            if (this.arr[i].options[k].value === this.choiceArray[j] ) {
              this.arr[i].options[k].select = false;
              this.choiceArray.splice(j,1);
            }
          }
        }
      }
    }
    this.choiceArray.push(this.choice);
    for (let i = 0; i< this.arr.length; i++){
      if (this.arr[i].id === id1) {
        for (let k = 0; k < this.arr[i].options.length; k++) {
          if (this.arr[i].options[k].value === this.choice) {
            this.arr[i].options[k].select = true;
          }
        }
      }
    }
    console.log(this.choiceArray);
  }

  onSubmit(event: any) {
    for (let i = 0; i < this.arr.length; i++) {
      for (let j = 0; j < this.choiceArray.length; j++) {
        if (this.arr[i].correctOption === this.choiceArray[j]) {
          this.result++;
          this.choiceArray.splice(j,1);
        }
      }
    }
    Swal.fire("Quiz Submitted Successfuly!", "Your Score - "+ this.result.toString(), "success");

  }
}
type MyArrayType = Array<{id: string, question: string, options: any, correctOption: string}>;
