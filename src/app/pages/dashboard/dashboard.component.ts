import { Component } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
   userList:any = [] = [];
  
  constructor(private user : UserService){}

  ngOnInit(){

    this.user.getUsers().subscribe((res)=>{
      console.log(res);
      this.userList = res.data;

    },(error)=>{
      console.log(error);

    })

  }



  
}
