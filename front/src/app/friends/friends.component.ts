import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { Observable, Subject } from 'rxjs';
import { Users } from '../models/users.models';
import { UsersService } from '../_services/users.service';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})

export class FriendsComponent implements OnInit {
  
  readonly USER_API = 'http://localhost:5000/api/user';

  users!: any;
  userNameList: Users[] = [];
  friends!: any;

  constructor(private usersService: UsersService, private storageService: StorageService) { }
  
  ngOnInit(): void {
    this.users = this.usersService.getAllusers().subscribe(
      (data: any) => {
        data.users.map((user: any) => {
          if(user.username !== undefined){
            this.userNameList.push(user.username)
          }
        })
        return this.userNameList;
      }
    );

    this.friends = this.storageService.getUser().others.friends;
  }
  
  // ngOnDestroy(): void {
  //   this.destroy$.next(true);
  // }
}