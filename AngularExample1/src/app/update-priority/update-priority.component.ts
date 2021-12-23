import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdateInterface } from './UpdateInterface';
import { UpdateService } from './UpdateService';

@Component({
  selector: 'app-update-priority',
  templateUrl: './update-priority.component.html',
  styleUrls: ['./update-priority.component.css']
})
export class UpdatePriorityComponent implements OnInit {
  public tasks!:UpdateInterface[];
  form:any;
  task_ID!:number;
  priority!:string;

  constructor(private us : UpdateService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      task_ID:new FormControl(
      "",
      Validators.compose([Validators.required])
      ),
      priority:new FormControl("",Validators.compose([Validators.required]))
      
      });
      
  }
  onSubmit(task:any) {
    this.us.updatePriority(task.task_ID,task.priority).subscribe(data=>this.tasks=data)
    }

}


