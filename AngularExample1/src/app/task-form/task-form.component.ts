import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskDetails } from './taskdetails';
import { TaskService } from './TaskService';



@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(private taskService:TaskService) { }
  name!: string;
  priority!:string;
  description!:string;
  status_Changed_On!:Date;
  status!:string;
  notes!:string;
  creator_ID!:number;
  task_ID!:number;
  isBookmarked!:Boolean;
  owner_ID!:number;
  created_On!:Date;
  user_ID!:number;

task:TaskDetails=new TaskDetails();
restask:TaskDetails=new TaskDetails();
success:boolean=false;
  ngOnInit(): void {
  }
sendData(){
  this.task.created_On=this.created_On;
  this.task.creator_ID=this.creator_ID;
  this.task.description=this.description;
  if(this.isBookmarked)
  this.task.isBookmarked=true ;
  else
  this.task.isBookmarked=false ;
  this.task.name=this.name;
  this.task.notes=this.notes;
  this.task.owner_ID=this.owner_ID;
  this.task.priority=this.priority;
  this.task.status=this.status;
  this.task.status_Changed_On=this.status_Changed_On;
  this.task.task_ID=this.task_ID;
  this.task.user_ID=this.user_ID;
console.log(this.task)
this.taskService.addTask(this.task).subscribe(
res=>{console.log(res)
  this.restask=res;
  this.success=true;
},
err=>{console.log(err)}
)
}
}