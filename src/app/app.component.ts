import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ngFor-input-decorator-exercise';
  users: {username:string, id:number}[]= [{username: 'Iliya', id: 1}, {username: "John", id:2}, {username: 'Iliy', id: 3}, {username: "Johna", id:4}, {username: 'Ili', id: 5}, {username: "Johnny", id:6}];
}
