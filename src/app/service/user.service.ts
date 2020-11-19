import { Injectable } from '@angular/core';
import {Users} from '../model/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  users:Users[]=[
    {id:1 ,Name: 'Cherill dickson', Organisation: 'DXC technologies', Persona: 'Solution Architect', SystemRole: 'Default', Status: 'Active'},
    { id:2, Name: 'Jacob', Organisation: 'DXC technologies', Persona: 'Technology Architect', SystemRole: 'Default', Status: 'Active'},
    {id:3, Name: 'Larry', Organisation: 'DXC technologies', Persona: 'developer', SystemRole: 'Default', Status: 'Inactive'},
  

  ];
  

  constructor() { }
  onGet(){
    return this.users;
  }
  onGetUsers(id:Number){
    return this.users.find(x=>x.id===id);

  }
  onAdd(us:Users){
    console.log('im added');
    this.users.push(us);
    
  }
  onDelete(id:Number){
    let us=this.users.find(x=>x.id===id);
    let index=this.users.indexOf(us,0);
    this.users.splice(index,1);
  }
  onUpdate(us:Users){
    let oldUsers=this.users.find(x=>x.id===us.id);
    oldUsers.Name=us.Name;
    //console.log("entering...");
    oldUsers.Organisation=us.Organisation;
    oldUsers.Persona=us.Persona;
    oldUsers.SystemRole=us.SystemRole;
    oldUsers.Status=us.Status;
  }
}

 /*  localStorage.setItem("users",JSON.stringify (us));
} 
 console.log(this.us);
 this.us=JSON.parse(localStorage.getItem('us'));
}
}
 */

