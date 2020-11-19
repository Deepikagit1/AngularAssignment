import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { Users } from 'src/app/model/users.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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
  

  constructor( private router:Router,private route:ActivatedRoute ,private userService:UserService ) { }

  ngOnInit(): void {
    this.id= +this.route.snapshot.paramMap.get('id');
    this.header=this.id=== 0? 'Add new record':'Edit record';

    if(this.id!=0){
      this.us=this.userService.onGetUsers(this.id);
    }
  }
  onSubmit(form:NgForm){
    let us:Users={
      id: form.value.id,
      Name: form.value.name,
      Organisation: form.value.organisation,
      Persona: form.value.persona,
      SystemRole: form.value.systemrole,
      Status: form.value.status,
      
    } 
   /*  this.userService.onAdd(us);
    this.router.navigateByUrl('user');
    //console.log("entering...");
  } */
  if(this.id===0){
    this.userService.onAdd(us);
    }
    else{
      this.userService.onUpdate(us);
    }
    this.router.navigateByUrl('user');
  }
}


