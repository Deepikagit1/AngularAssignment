import { Component, OnInit } from '@angular/core';
import{User} from '../user';
import{UserService} from '../service/user.service';
import { Users } from '../model/users.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  itemImgUrl="/assets/digitalnow.png";
  

  users:Users[];
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
   this.users=this.userService.onGet();
  }
  onDelete(id:Number){
    this.userService.onDelete(id);
  }

  public Onlogout(){
    localStorage.removeItem('ACCESS_TOKEN');
    console.log("im logged");
    this.router.navigateByUrl('/login');
    
  }
  /* 
  viewUser(){
    this.router.navigate(['/edit/:id']);
  } */

  

}


