package com.sonata.login.dao;

import java.sql.SQLException;
import java.util.List;

import com.sonata.login.model.Task;


public interface TaskInterface {
	
	
	public List<Task> getData1() throws SQLException;
	
	public int setPriority(int Task_ID,String Priority) throws SQLException;
	
	public int setNotes(int Task_ID,String Notes) throws SQLException;
	
	public int settask(int Task_ID, int Owner_ID) throws SQLException;
	
	public int setBookmarks(int Task_ID, boolean IsBookmarked) throws SQLException;
	
	public Task addTask(Task task) throws SQLException;
	
	public Task setSearch(int Task_ID) throws SQLException;
	//public List<Task> searchtask(int taskid) throws SQLException;
	
	//public List<Task> trackstatus(String status);
	
	public  Task setstate(String Status) throws SQLException;
	
	public void deleteTask(int id) throws SQLException;
	


}
