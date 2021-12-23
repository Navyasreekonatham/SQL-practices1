package com.sonata.login.dao;

import java.sql.SQLException;
import java.util.List;

import com.sonata.login.model.User;




public interface UserInterface {
	
	
	
	public List<User> getData11() throws SQLException;
    public User addUser(User User) throws SQLException;
	public boolean validateUser(String name, String password);
	public void deleteuser(int id) throws SQLException;
	
	
}
