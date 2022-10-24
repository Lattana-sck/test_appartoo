import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../_services/storage.service';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
    role: null
  };
  currentUser: any;
  src!: string;
 
  constructor(private storageService: StorageService, private userService: UsersService, private router: Router) { }
  
  ngOnInit(): void {
    this.currentUser = this.storageService.getUser().others;
    switch (this.currentUser.role.toLowerCase()) {
      case 'guerrier':
        this.src = 'assets/images/guerrier.png';
        break;
      case 'alchimiste':
        this.src = 'assets/images/alchimiste.png';
        break;
      case 'sorcier':
        this.src = 'assets/images/sorcier.png';
        break;
      case 'espion':
        this.src = 'assets/images/espion.png';
        break;
       case 'enchanteur':
        this.src = 'assets/images/enchanteur.png';
    }
  }

  onSubmit(): void {
    const { username, email, password, role } = this.form;
    this.userService.updateUser(this.currentUser._id,username, email, password, role).subscribe(
     res => {
      console.log(res);
     } 
    );
    this.router.navigate(['profile'], {queryParams: { registered: 'true' } });
  }
  deleteUser(): void { console.log("Account deleted ! ") }
}