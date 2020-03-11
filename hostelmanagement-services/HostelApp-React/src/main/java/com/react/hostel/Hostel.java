package com.react.hostel;

public class Hostel {

	String hostelName;
	String description;
	String address;
	String city;
	String contactName;
	String contactNo;
	int bedsAvailable;
	String imgUrl;
	int pricePerBed;

	public String getHostelName() {
		return hostelName;
	}

	public void setHostelName(String hostelName) {
		this.hostelName = hostelName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getContactName() {
		return contactName;
	}

	public void setContactName(String contactName) {
		this.contactName = contactName;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	public int getBedsAvailable() {
		return bedsAvailable;
	}

	public void setBedsAvailable(int bedsAvailable) {
		this.bedsAvailable = bedsAvailable;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public int getPricePerBed() {
		return pricePerBed;
	}

	public void setPricePerBed(int pricePerBed) {
		this.pricePerBed = pricePerBed;
	}

	@Override
	public String toString() {
		return "Hostel [hostelName=" + hostelName + ", description=" + description + ", address=" + address + ", city="
				+ city + ", contactName=" + contactName + ", contactNo=" + contactNo + ", bedsAvailable="
				+ bedsAvailable + ", imgUrl=" + imgUrl + ", pricePerBed=" + pricePerBed + "]";
	}

	public Hostel(String hostelName, String description, String address, String city, String contactName,
			String contactNo, int bedsAvailable, String imgUrl, int pricePerBed) {
		super();
		this.hostelName = hostelName;
		this.description = description;
		this.address = address;
		this.city = city;
		this.contactName = contactName;
		this.contactNo = contactNo;
		this.bedsAvailable = bedsAvailable;
		this.imgUrl = imgUrl;
		this.pricePerBed = pricePerBed;
	}

	public Hostel() {
		super();
		// TODO Auto-generated constructor stub
	}

}
