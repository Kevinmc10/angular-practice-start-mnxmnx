import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  register = {
    name: '',
    email: '',
    pasword: '',
  };
  onRegister() {
    console.log(this.register);
  }
}
