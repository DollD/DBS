import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conveneSurvey';

  showLoginSuccess = true;
  uName = localStorage.getItem('userName');

  
}
