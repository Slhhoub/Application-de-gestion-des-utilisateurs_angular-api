import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{

  user!:any;
  userid!:any;

  errors:any=[];

  constructor(private route: ActivatedRoute,private  userService:UsersService){

  }
  ngOnInit(): void {
    this.userid=this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.userid).subscribe((res:any)=>{
      console.log(res);
      this.user=res.data;
    })
  }



  updateUsers(){
    let inputData={
      email: this.user.email,
      first_name: this.user.first_name,
      last_name: this.user.last_name,
      avatar: this.user.avatar
    }

    this.userService.updateUser(inputData,this.userid).subscribe({
      next:(res:any)=>{
        console.log(res)
      },
      error: (err) => {
        console.error('Error:', err);
        this.errors = err.error.errors;
      }
    });

  }
}
