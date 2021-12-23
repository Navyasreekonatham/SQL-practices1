import { Component, OnInit } from '@angular/core';
import { userservice } from './userservice';
import { Iuser } from './Iuser';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  public user: Iuser[]=[];

  constructor(private userservice:userservice) { }

  ngOnInit(): void {
    this.userservice.getusers()
    .subscribe(data=>this.user=data)
  }

}
