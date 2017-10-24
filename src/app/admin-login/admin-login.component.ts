import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  username: string; password: string;
  hide: boolean = true;
  login() {
    console.log('username = ', this.username, '\npassword = ', this.password);
  }
  evaluateHide() {
    console.log('Event ==> ');
    this.hide = !this.hide;
  }

  ngOnInit() {
  }

}
