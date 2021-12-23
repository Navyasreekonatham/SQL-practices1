import { Component, OnInit } from '@angular/core';
import { deleteuserinterface } from './deleteuserinterface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { deleteuserservice } from './deleteuserservice';



@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  
  public users!:deleteuserinterface[];
  form:any;
  user_ID!:number;
  
  

  constructor(private us : deleteuserservice) { }

  ngOnInit(): void  {
    this.form=new FormGroup({
      user_ID:new FormControl(
      "",
      Validators.compose([Validators.required])
      ),
      bookmark:new FormControl("",Validators.compose([Validators.required]))
      
      
      });
      
  }
  onSubmit(user:any) {
    this.us.deleteUser(user.user_ID).subscribe(data=>this.users=data)
    }
   
    

}