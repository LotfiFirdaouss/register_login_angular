import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-home-public',
  templateUrl: './home-public.component.html',
  styleUrls: ['./home-public.component.css']
})
export class HomePublicComponent implements OnInit {
  currentUser!: User;
  group="";
  isProfessor=false;
  isStudent=false;
  isAdministrator=false;

  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser.id)
    if(this.currentUser.id){
      this.group = this.currentUser.groups[0];
      console.log(this.group);
      if( this.group == "administator"){
        this.isAdministrator = true;
      }else if( this.group == "professor" ){
        this.isProfessor = true;
      }else{
        this.isStudent = true;
      }
    }

  }

}
