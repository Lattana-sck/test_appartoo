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

  currentUsername!: string;
  users!: any;
  usersList: Users[] = [];
  friendsId!: any;
  usernameFriend: Users[] = [];

  constructor(private usersService: UsersService, private storageService: StorageService) { }
  
  ngOnInit(): void {
    this.users = this.usersService.getAllusers().subscribe(
      (data: any) => {
        data.users.map((user: any) => {
          if(user.username !== undefined){
            this.usersList.push(user)
          }
        })
        return this.usersList;
      }
    );

    this.currentUsername = this.storageService.getUser().others.username;
    this.friendsId = this.storageService.getUser().others.friends;

    this.friendsId.map( (id: any) => {
      this.users = this.usersService.getUsernameById(id).subscribe(
        (data: any) => {
          if(data[0].username !== undefined){
            this.usernameFriend.push(data[0]);
          }
        }) 
        
        return this.usernameFriend;
      })
      console.log(this.usernameFriend)
  }

  addFriend(id: any){
    this.usersService.addFriends(id).subscribe(
      (data: any) => {
        console.log(data)
      }
    )
  }

  removeFriend(id: any){
    this.usersService.removeFriends(id).subscribe(
      (data: any) => {
        console.log(data)
      }
    )
  }
  
}