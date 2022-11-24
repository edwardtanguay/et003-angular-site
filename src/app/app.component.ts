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
      const rawEmployees = (await axios.get('https://edwardtanguay.vercel.app/share/employees.json')).data;

      rawEmployees.forEach((rawEmployee: any) => {
        this.employees.push({
          fullName: rawEmployee.firstName + ' ' + rawEmployee.lastName,
          notes: rawEmployee.notes
        })
      })

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
