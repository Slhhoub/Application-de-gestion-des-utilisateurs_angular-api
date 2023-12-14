import { Injectable } from '@angular/core';
import { HttpUsersListResponse } from '../pages/users/users.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/envvironments';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public perPage=6;


  constructor(private http:HttpClient) { }

  geUsers(page:number):Observable<HttpUsersListResponse>{
    return this.http.get(`${environment.apiLink}/users?page=${page}&per_page=${this.perPage}`) as Observable<HttpUsersListResponse>;
  }

}
