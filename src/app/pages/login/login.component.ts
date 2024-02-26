import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private service: UserService, private router: Router) {}
  loginSpinner: boolean = false;
 

  ngOnInit() {}

  loginForm = new FormGroup({
    EmailId: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required),
  });

  onLogin() {
    if (this.loginForm.valid) {
      this.loginSpinner = true;
      this.service.userLogin(this.loginForm.value).subscribe(
        (res: any) => {
          if (res.result) {
            localStorage.setItem('authToken', JSON.stringify(res.data.token));
            localStorage.setItem('userEmail', JSON.stringify(res.data.emailId));
            this.router.navigateByUrl('/dashboard');
          } else {
            alert(res.message);
          }
        },
        (error) => {
          alert('Unauthorized User' + error);
          this.loginSpinner = false;
        }
      );
    } else {
      alert('Please Enter Valid Credentials');
    }
  }
}
