import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {

  userLoginfo: any;
  userEmail: any;

  constructor(private route: Router, private user: UserService) {}

  ngOnInit() {
    this.userLoginfo = localStorage.getItem('userEmail');

    this.userEmail = JSON.parse(this.userLoginfo);

    console.log(this.userEmail);
   
  }

  Logout() {
    localStorage.clear();
    this.route.navigate(['login']);
  }
}
