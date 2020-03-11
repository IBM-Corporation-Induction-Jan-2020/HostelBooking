package com.react.hostel;

public class Booking {

	String userName;
	String hostelName;
	String fromDate;
	String toDate;
	int totalDays;
	int rent;
	int bedsBooked;

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

	public String getFromDate() {
		return fromDate;
	}

	public void setFromDate(String fromDate) {
		this.fromDate = fromDate;
	}

	public String getToDate() {
		return toDate;
	}

	public void setToDate(String toDate) {
		this.toDate = toDate;
	}

	public int getTotalDays() {
		return totalDays;
	}

	public void setTotalDays(int totalDays) {
		this.totalDays = totalDays;
	}

	public int getRent() {
		return rent;
	}

	public void setRent(int rent) {
		this.rent = rent;
	}

	public int getBedsBooked() {
		return bedsBooked;
	}

	public void setBedsBooked(int bedsBooked) {
		this.bedsBooked = bedsBooked;
	}

	@Override
	public String toString() {
		return "Booking [userName=" + userName + ", hostelName=" + hostelName + ", fromDate=" + fromDate + ", toDate="
				+ toDate + ", totalDays=" + totalDays + ", rent=" + rent + ", bedsBooked=" + bedsBooked + "]";
	}

	public Booking(String userName, String hostelName, String fromDate, String toDate, int totalDays, int rent,
			int bedsBooked) {
		super();
		this.userName = userName;
		this.hostelName = hostelName;
		this.fromDate = fromDate;
		this.toDate = toDate;
		this.totalDays = totalDays;
		this.rent = rent;
		this.bedsBooked = bedsBooked;
	}

	public Booking() {
		super();
	}

}
