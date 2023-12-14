import { Component } from '@angular/core';
import { UsersService } from '../../../services/users.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  email!: string;
  first_name!: string;
  last_name!: string;
  avatar!: string;

  errors:any=[];

  constructor(private userService:UsersService){}

  saveUsers(){
    let inputData={
      email: this.email,
      first_name: this.first_name,
      last_name: this.last_name,
      avatar: this.avatar
    }

    this.userService.saveUser(inputData).subscribe({
      next:(res:any)=>{
        console.log(res)
      },
      error: (err) => {
        console.error('Error:', err);
        this.errors = err.error.errors;
      }
    })
  }
}
