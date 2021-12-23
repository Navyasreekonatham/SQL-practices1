import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from './task-service.service';
import { Itask } from './Itask';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.css']
})
export class TaskdetailsComponent implements OnInit {
  public tasks :Itask[]=[];
  term!:any;

  constructor(private taskService:TaskServiceService) { }

  ngOnInit(): void {
    this.taskService.getTasks()
    .subscribe(data=>this.tasks=data)
  }

}
