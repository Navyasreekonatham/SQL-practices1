package com.sonata.login.model;

import java.sql.Date;


import javax.xml.bind.annotation.XmlRootElement;

import org.springframework.stereotype.Component;

@Component
@XmlRootElement
public class Task {

	 private int Task_ID;
	    private int Owner_ID;
	    private int Creator_ID;
	    private String Name;
	    private String Description;
	    private String Status;
	    private String Priority;
	    private String Notes;
	    private boolean IsBookmarked;
	    private Date Created_On;
	    private Date Status_Changed_On;
	    private int user_ID;
		public int getUser_ID() {
			return user_ID;
		}
		public void setUser_ID(int user_ID) {
			this.user_ID = user_ID;
		}
		public int getTask_ID() {
			return Task_ID;
		}
		public void setTask_ID(int task_ID) {
			Task_ID = task_ID;
		}
		public int getOwner_ID() {
			return Owner_ID;
		}
		public void setOwner_ID(int owner_ID) {
			Owner_ID = owner_ID;
		}
		public int getCreator_ID() {
			return Creator_ID;
		}
		public void setCreator_ID(int creator_ID) {
			Creator_ID = creator_ID;
		}
		public String getName() {
			return Name;
		}
		public void setName(String name) {
			Name = name;
		}
		public String getDescription() {
			return Description;
		}
		public void setDescription(String description) {
			Description = description;
		}
		public String getStatus() {
			return Status;
		}
		public void setStatus(String status) {
			Status = status;
		}
		public String getPriority() {
			return Priority;
		}
		public void setPriority(String priority) {
			Priority = priority;
		}
		public String getNotes() {
			return Notes;
		}
		public void setNotes(String notes) {
			Notes = notes;
		}
		public boolean isIsBookmarked() {
			return IsBookmarked;
		}
		public void setIsBookmarked(boolean isBookmarked) {
			IsBookmarked = isBookmarked;
		}
		public Date getCreated_On() {
			return Created_On;
		}
		public void setCreated_On(Date created_On) {
			Created_On = created_On;
		}
		public Date getStatus_Changed_On() {
			return Status_Changed_On;
		}
		public void setStatus_Changed_On(Date status_Changed_On) {
			Status_Changed_On = status_Changed_On;
		}
	    
		
}
