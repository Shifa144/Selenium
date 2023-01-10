package org.stepdefinition;

import org.base.BaseClass;
import org.sample.PageObjectModel1;     //completely it is called as test case

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Cucumber3 extends BaseClass {
	
	PageObjectModel1 p; //globally declared
	@Given("To launch the chrome browser and maximize window")
	public void to_launch_the_chrome_browser_and_maximize_window() {
	    launchBrowser();
	    windowMaximize();
	}

	@When("To launch the url of the  facebook applications")
	public void to_launch_the_url_of_the_facebook_applications() {
	    launchUrl("https://en-gb.facebook.com/");
	}

	@When("To pass valid username in email field")
	public void to_pass_valid_username_in_email_field() {
		p = new PageObjectModel1();
		passText("Selenium@gmail.com", p.getEmail());
	    
	}

	@When("To pass invalid password in password field")
	public void to_pass_invalid_password_in_password_field() {
		p = new PageObjectModel1();
		passText("inmakes", p.getPass());
	    
	}

	@When("To click Login button")
	public void to_click_Login_button() {
		p = new PageObjectModel1();
		clickBtn(p.getLoginbtn());
		
	   
	}

	@When("To check whether navigate to homePage or not")
	public void to_check_whether_navigate_to_homePage_or_not() {
		System.out.println("To check your login credential");
	   
	}

	@Then("To close the Browser")
	public void to_close_the_Browser() {
		closeEntireBrowser();
	   
	}


}
