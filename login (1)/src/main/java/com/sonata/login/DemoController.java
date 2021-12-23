package com.sonata.login;


import java.sql.SQLException;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sonata.login.dao.TaskInterface;
import com.sonata.login.dao.UserInterface;
import com.sonata.login.model.Task;
import com.sonata.login.model.User;

@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class DemoController {
	
	@Autowired
	User User;

    @Autowired
	UserInterface userimp;
	
	@Autowired
	TaskInterface taskimpl;
	
	@Autowired
	Task task;
		

	//To GET list of tasks
	@RequestMapping(value ="/list", method = RequestMethod.GET, produces="application/json")
	public List<Task> getData1() throws SQLException{
		
		return taskimpl.getData1();
		
	}
	
	//To prioritize the task from taskid
	@RequestMapping(value="/Priority/{Task_ID}/Priority/{Priority}", method = RequestMethod.GET)
	public List<Task> setPriority( @PathVariable int Task_ID, @PathVariable String Priority) throws SQLException
	{
		int row=taskimpl.setPriority(Task_ID, Priority);
		
		return taskimpl.getData1();
		
	}
	
	
	//To assigning the task 
	@RequestMapping(value="/create/{Task_ID}/user/{Owner_ID}",method=RequestMethod.GET)
	public List<Task> settask(@PathVariable int Task_ID,@PathVariable int  Owner_ID) throws SQLException
	{
		int row=taskimpl.settask(Task_ID,Owner_ID);
	    return taskimpl.getData1();
	}
	
	
	//By using Get requestmethod able to add notes 
	@RequestMapping(value="/notes/{Task_ID}/Notes/{Notes}", method = RequestMethod.GET)
	
	public List<Task> setNotes(@PathVariable int Task_ID, @PathVariable String Notes) throws SQLException
	{
		int row=taskimpl.setNotes(Task_ID, Notes);
		return taskimpl.getData1();
	}
	
	//To add bookmark
	@RequestMapping(value="/bookmark/{Task_ID}/IsBookmarked/{IsBookmarked}", method = RequestMethod.GET)
	public List<Task> setBookmarks(@PathVariable int Task_ID,@PathVariable boolean IsBookmarked) throws SQLException
	{
		int row = taskimpl.setBookmarks(Task_ID, IsBookmarked);
		return taskimpl.getData1();
	}
	
	//To search a task based on taskid
	@RequestMapping(value="/search/{Task_ID}",method = RequestMethod.GET,produces="application/json")
     public Task setSearch(@PathVariable int Task_ID) throws SQLException
	{
		return  taskimpl.setSearch(Task_ID);
		//return task.getData1();
	}
	
    //search task by status
	@RequestMapping(value="/tasks/status/{Status}",method = RequestMethod.GET,produces="application/json")
	public Task setstate(@PathVariable String Status) throws SQLException
	{
		return taskimpl.setstate(Status);
	}
	
	
	
	//By POST to add new task to the tasklist
	@PostMapping(value = "/addtask", consumes = "application/json", produces="application/json")
	public Task insert(@RequestBody Task Task) throws SQLException
	{
		
		return taskimpl.addTask(Task);
     }
	
	//deletetask
	@DeleteMapping("/tasks/{Task_ID}")
	public void Delete(@PathVariable int Task_ID) throws SQLException
	{
		taskimpl.deleteTask(Task_ID);
	}
	
	@RequestMapping(value ="/listuser", method = RequestMethod.GET, produces="application/json")
	public List<User> getData11() throws SQLException{
		
		return userimp.getData11();
		
	}
	
	
	//delete user
	@DeleteMapping("/user/{User_ID}")
	public void Deleteuser(@PathVariable int User_ID) throws SQLException
	{
		userimp.deleteuser(User_ID);
	}
	
	//By post add new user
	@PostMapping(value="/adduser",consumes = "application/json", produces="application/json")
	 public User addUser(@RequestBody User User) throws SQLException{
		
	   return userimp.addUser(User);
		
	}
	
	@GetMapping(value ="/login/{Username}/{Password}", produces ="application/json")
	public boolean validation(@PathVariable String Username, @PathVariable String Password) throws SQLException{
		return userimp.validateUser(Username, Password);
	}


	
	
}
