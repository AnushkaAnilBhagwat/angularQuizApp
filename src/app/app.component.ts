import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularQuizApp';

  choice: any = '';
  list = ["HTML", "CSS", "JS"];

  onRadioChange(event:any){
    this.choice = event.target.value;
  }
}
