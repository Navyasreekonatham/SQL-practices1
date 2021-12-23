import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { HomeComponent } from './home/home.component';
import { SearchTaskComponent } from './search-task/search-task.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import { TrackStatusComponent } from './track-status/track-status.component';
import { UpdateBookmarkComponent } from './update-bookmark/update-bookmark.component';
import { UpdateNotesComponent } from './update-notes/update-notes.component';
import { UpdateOwneridComponent } from './update-ownerid/update-ownerid.component';
import { UpdatePriorityComponent } from './update-priority/update-priority.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'deleteuser',component:DeleteUserComponent},
  {path:'details',component:TaskdetailsComponent},
  {path:'updatenotes',component:UpdateNotesComponent},
  {path:'updatebookmarke',component:UpdateBookmarkComponent},
  {path:'updatepriority',component:UpdatePriorityComponent},
  {path:'userform',component:UserFormComponent},
  {path:'taskform',component:TaskFormComponent},
  {path:'search',component:SearchTaskComponent},
  {path:'status',component:TrackStatusComponent},
  {path:'userdetails',component:UserdetailsComponent},
  {path:'assigntask',component:UpdateOwneridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
