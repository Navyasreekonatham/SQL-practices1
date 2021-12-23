import { Component, OnInit } from '@angular/core';
import { UserService } from './userservice';
import { UserDetails } from './userDetails';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(private userService:UserService) { }

  user_ID!:number;
  username!:string;
  email!:string;
  first_Name!:string;
  last_Name!:string;
  contact_Number!:number;
  role!:string;
  dOB!:Date;
  createdOn!:Date;
  password!:string;
  active!:boolean;

user:UserDetails=new UserDetails();
resuser:UserDetails=new UserDetails();
success:boolean=false;
  ngOnInit(): void {
  }
sendData(){
  this.user.createdOn=this.createdOn;
  this.user.dOB=this.dOB;
  if(this.active)
  this.user.active=true ;
  else
  this.user.active=false ;
  this.user.role=this.role;
  this.user.contact_Number=this.contact_Number;
  this.user.last_Name=this.last_Name;
  this.user.first_Name=this.first_Name;
  this.user.email=this.email;
  this.user.username=this.username;
  this.user.password=this.password;
  this.user.user_ID=this.user_ID;

console.log(this.user)
this.userService.addUser(this.user).subscribe(
res=>{console.log(res)
  this.resuser=res;
  this.success=true;
},
err=>{console.log(err)}
)
}
}