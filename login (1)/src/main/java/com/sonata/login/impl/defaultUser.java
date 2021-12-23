package com.sonata.login.impl;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import com.sonata.login.dao.UserInterface;
import com.sonata.login.db.DbConnection;
import com.sonata.login.model.Task;
import com.sonata.login.model.User;


@Component
public class defaultUser implements UserInterface {
	
	@Autowired
	DbConnection db;
	boolean c;
	
	
         
	//implementing method to add a new user
	@Override
	public User addUser(User User) throws SQLException {
		PreparedStatement ps = db.getConnection().prepareStatement
				("insert into user values(?,?,?,?,?,?,?,?,?,?,?)");
		ps.setInt(1,User.getUser_ID());
		ps.setString(2,User.getUsername());
		ps.setString(3,User.getEmail());
		ps.setString(4, User.getFirst_Name());
		ps.setString(5,User.getLast_Name());
		ps.setLong(6, User.getContact_Number());
		ps.setString(7, User.getRole());
		ps.setBoolean(8, User.isActive());
		ps.setDate(9,User.getdOB());
		ps.setDate(10, User.getCreatedOn());
		ps.setString(11, User.getPassword());
		int row = ps.executeUpdate();
		return User;
	}
	
	//implementing method to get list of tasks
		public List<User> getData11(){
			List<User> userlist = new ArrayList<>();
			try {
			PreparedStatement cs1 = db.getConnection().prepareStatement
					("select * from user");
			
			ResultSet rs = cs1.executeQuery();
			while(rs.next()) {
				
				User t1= new User();
				
				 
				t1.setUser_ID(rs.getInt(1));
				t1.setUsername(rs.getString(2));
				t1.setEmail(rs.getString(3));
				t1.setFirst_Name(rs.getString(4));
				t1.setLast_Name(rs.getString(5));
				t1.setContact_Number(rs.getLong(6));
				t1.setRole(rs.getString(7));
				t1.setActive(rs.getBoolean(8));
				t1.setdOB(rs.getDate(9));
				t1.setCreatedOn(rs.getDate(10));
				t1.setPassword(rs.getString(11));
			    userlist.add(t1);
			}
				
			}catch(SQLException se) {se.printStackTrace();}
			return userlist;}
			

			
	
	

	public boolean validateUser(String Username, String Password){
		try {
		PreparedStatement ps = (PreparedStatement) db.getConnection().prepareStatement("select Username, Password from user where name =?");
		ps.setString(1, Username);
		ResultSet rs = ps.executeQuery();
		while(rs.next()) {
			if(Username.equals(rs.getString(1)) && Password.equals(rs.getString(2))) {
				c = true;
			}
			else {
				c = false;
			}
		}
		}catch(SQLException sqe) {sqe.printStackTrace();}
		
		return c;
	}
	
	@Override
    public void deleteuser(int id) throws SQLException
    {
    	PreparedStatement cs6=db.getConnection().prepareStatement("delete from user where User_ID=?");
    	cs6.setInt(1, id);
    	int row=cs6.executeUpdate();
    }

	
	

}
	


