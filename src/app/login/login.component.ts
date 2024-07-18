import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  loginForm!: FormGroup;

  constructor(private http: HttpClient,
    private fb: FormBuilder, 
    private router: Router){}



    ngOnInit(): void {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
    }




    login(): void {
      if (this.loginForm.valid) {
        const email = this.loginForm.get('email')!.value;
        const password = this.loginForm.get('password')!.value;
  
        this.http.post("http://localhost:8080/api/user/login", { email, password })
          .subscribe((response: any) => {
            console.log(response);
            if (response.role) {
              localStorage.setItem('userRole', response.role);
              this.router.navigate(['/dashboard']);
            }
          }, error => {
            alert('Invalid credentials');
          });
      }
    }






    // login(): void {
    //   if (this.loginForm.valid) {
    //     console.log(this.loginForm.value);
  
    //     this.http.post("http://localhost:8080/api/user/login", this.loginForm.value)
    //       .subscribe((response: any) => {
    //         console.log(response.role);
    //         if (response.role === 'admin') {
    //           this.router.navigate(['/dashboard']);
    //         } else if (response.role === 'user') {
    //           this.router.navigate(['/dashboard']);
    //         }
    //       }, error => {
    //         alert('Invalid credentials');
    //       });
    //   }
    // }









    // login() {
    //   this.http.post("localhost:8080/api/user/login", { email: this.email, password: this.password })
    //     .subscribe((response: any) => {
    //       console.log(response);
    //       if (response.role === 'admin') {
    //         this.router.navigate(['/dashboard/admin']);
    //       } else if (response.role === 'user') {
    //         this.router.navigate(['/dashboard/user']);
    //       }
    //     }, error => {
    //       alert('Invalid credentials');
    //     });
    // }
}
