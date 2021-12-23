import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateBookmarkComponent } from './update-bookmark/update-bookmark.component';
import { UpdateNotesComponent } from './update-notes/update-notes.component';
import { UpdatePriorityComponent } from './update-priority/update-priority.component';
import { SearchTaskComponent } from './search-task/search-task.component';
import { TrackStatusComponent } from './track-status/track-status.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { HomeComponent } from './home/home.component';
import { UpdateOwneridComponent } from './update-ownerid/update-ownerid.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




@NgModule({
  declarations: [
    AppComponent,
    TaskdetailsComponent,
    UpdateBookmarkComponent,
    UpdateNotesComponent,
    UpdatePriorityComponent,
    SearchTaskComponent,
    TrackStatusComponent,
    TaskFormComponent,
    DeleteUserComponent,
    UserFormComponent,
    UserdetailsComponent,
    HomeComponent,
    UpdateOwneridComponent,
    
    
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    Ng2SearchPipeModule
    
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
