import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from 'express';


@Component({
  selector: 'app-retreive',
  templateUrl: './retreive.component.html',
  styleUrls: ['./retreive.component.css']
})
export class RetreiveComponent  {

  saveuserForm!: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.saveuserForm = this.fb.group({
      name: [null, [Validators.required]],
      address: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      role: [null, [Validators.required]]
    });
  }

  saveUser(): void {
    if (this.saveuserForm.valid) {

      console.log(this.saveuserForm.value);
      this.userService.saveUser(this.saveuserForm.value).subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.error('Error saving user', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }

}
