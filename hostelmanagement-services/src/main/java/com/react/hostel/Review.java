package com.react.hostel;

public class Review {

	String userName;
	String hostelName;
	int stars;
	String review;

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getHostelName() {
		return hostelName;
	}

	public void setHostelName(String hostelName) {
		this.hostelName = hostelName;
	}

	public int getStars() {
		return stars;
	}

	public void setStars(int stars) {
		this.stars = stars;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	@Override
	public String toString() {
		return "Review [userName=" + userName + ", hostelName=" + hostelName + ", stars=" + stars + ", review=" + review
				+ "]";
	}

	public Review(String userName, String hostelName, int stars, String review) {
		super();
		this.userName = userName;
		this.hostelName = hostelName;
		this.stars = stars;
		this.review = review;
	}

	public Review() {
		super();
		// TODO Auto-generated constructor stub
	}

}
