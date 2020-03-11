package com.react.hostel;

public class City {

	String cityName;
	String description;
	String imgUrl;

	public String getCityName() {
		return cityName;
	}

	public void setCityName(String cityName) {
		this.cityName = cityName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	@Override
	public String toString() {
		return "City [cityName=" + cityName + ", description=" + description + ", imgUrl=" + imgUrl + "]";
	}

	public City(String cityName, String description, String imgUrl) {
		super();
		this.cityName = cityName;
		this.description = description;
		this.imgUrl = imgUrl;
	}

	public City() {
		super();
	}

}
