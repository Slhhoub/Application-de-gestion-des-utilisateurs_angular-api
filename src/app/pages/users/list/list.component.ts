import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../../../services/users.service';
import { Users } from '../../../types/users.type';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{

  users:Users[]=[];
  currentPage = 0;
  itemsPerPage= 0;
  totalItems = 0;

  constructor(private userService:UsersService){
  }


  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.geUsers(this.currentPage).subscribe(
      (infoUsers: any) => {
        this.currentPage=infoUsers.page;
        this.itemsPerPage=infoUsers.per_page;
        this.users = infoUsers.data;
        this.totalItems = infoUsers.total;
      }
    );
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadUsers();
  }

  deleteuser(event:any,userid:number){
    if(confirm('are you sure you want to delete this data ?'))
    {
      event.target.innerText="Delting...";
      this.userService.destroyUser(userid).subscribe((res:any)=>{
        this.loadUsers();
      })
    }
  }



}
