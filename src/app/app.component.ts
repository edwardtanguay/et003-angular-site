import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My First Angular Site';
  message = 'Welcome to this site.';
  employees: any = [];

  constructor() {

    (async () => {
      this.employees = (await axios.get('https://edwardtanguay.vercel.app/share/employees.json')).data;
    })();

    // this.employees = [
    //   {
    //     firstName: 'Frank',
    //     lastName: 'Holander',
    //     notes: 'frank\'s notes'
    //   },
    //   {
    //     firstName: 'Thomas',
    //     lastName: 'Schmidt',
    //     notes: 'thomas\' notes'
    //   }
    // ];


  }
}
