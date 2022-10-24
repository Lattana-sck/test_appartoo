import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { Observable, Subject } from 'rxjs';
import { Users } from '../models/users.models';
import { UsersService } from '../_services/users.service';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})

export class FriendsComponent implements OnInit {
  currentUsername!: string;
  users!: any;
  usersList: Users[] = [];
  friendsIdList!: any;
  usernameFriend: Users[] = [];
  friendId!: string;
  token!: string;

  constructor(private router: Router,private usersService: UsersService, private storageService: StorageService) { }
  
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
    this.friendsIdList = this.storageService.getUser().others.friends;

    this.friendsIdList.map( (id: any) => {
      this.users = this.usersService.getUsernameById(id).subscribe(
        (data: any) => {
          if(data[0].username !== undefined){
            this.usernameFriend.push(data[0]);
          }
        }) 
        return this.usernameFriend;
      })
    
  }

  addFriend(friend: string){
    console.log(friend)
    this.token = this.storageService.getToken();
    this.friendId= jwt_decode<any>(this.token).others._id
    this.usersService.addFriends(this.friendId, friend).subscribe(
      (data: any) => {
        console.log(data)
      }
    )
    this.router.navigate(['friends'])
  }

  removeFriend(friend: any){
    this.token = this.storageService.getToken();
    this.friendId= jwt_decode<any>(this.token).others._id
    this.usersService.removeFriends(this.friendId, friend).subscribe( 
      (data: any) => {
        console.log(data)
      }
    )
    this.router.navigate(['friends'])
  }
  
}