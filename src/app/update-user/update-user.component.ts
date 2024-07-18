import { Component  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {

  updateuserForm!: FormGroup;
  private router: Router = new Router;

    userID: number = this.activateRoute.snapshot.params["userID"]
  constructor(private activateRoute: ActivatedRoute,
    private userservice : UserService,
    private fb: FormBuilder
  ) {}

ngOnInit(){

  this.updateuserForm = this.fb.group({
    name: [null, [Validators.required]],
    address: [null, [Validators.required]],
    phoneNumber: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]],
    role: [null, [Validators.required]]
  });

  this.getUserByID();
}

getUserByID(){
  this.userservice.getUserByID(this.userID).subscribe((res)=>{
    console.log(res);
    this.updateuserForm.patchValue(res);
  })
}

updateUser(){
  this.userservice.updateUser(this.userID,this.updateuserForm.value).subscribe((res)=>{
    console.log(res);
    if(res.userID != null){
      this.router.navigateByUrl("user-managment");
    }
  })
}

// deleteUser(userID:number){
//   this.userservice.deleteUser(userID).subscribe((res)=>{
//     console.log(res);
//   })
// }

}
