import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser!: User; 

  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser(); //token (access+refresh)
    //var currentTokenAccess= this.currentUser.access;
    console.log(this.currentUser)
    //console.log(this.currentUser)
    //console.log(currentTokenAccess)
    //console.log(this.token.getDecodedAccessToken(currentTokenAccess))
  }

}
