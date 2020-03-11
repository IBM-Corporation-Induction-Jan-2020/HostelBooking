package com.react.hostel;

public class User {

	String type;
	String userName;
	String email;
	String password;

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "User [type=" + type + ", userName=" + userName + ", email=" + email + ", password=" + password + "]";
	}

	public User(String type, String userName, String email, String password) {
		super();
		this.type = type;
		this.userName = userName;
		this.email = email;
		this.password = password;
	}

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

}
