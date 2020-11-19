import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/model/users.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id:number;
  header:string;
  us:Users={
    id:0,
    Name:'',
    Organisation:'',
    Persona:'',
    SystemRole:'',
    Status:''
  };
  

  constructor(private router:Router,private route:ActivatedRoute ,private userService:UserService) { }

  ngOnInit(): void {
    
  }
  onCancel(form:NgForm){
    this.router.navigateByUrl('user');
}
}
