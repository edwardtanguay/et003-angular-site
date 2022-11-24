import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My First Angular Site';
  message = 'Welcome to this site.';
  employees:any = [];

  constructor() {
    this.employees = [
      {
        firstName: 'Frank'
      },
      {
        lastName: 'Hollander'
      }
    ];


  }
}
