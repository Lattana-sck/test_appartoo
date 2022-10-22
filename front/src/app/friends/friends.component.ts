import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../_services/friends.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  currentUser: any;
  constructor(private friendsService: FriendsService) { 
    this.currentUser = this.friendsService.getAllFriends();
  }

  ngOnInit(): void {
  }
}