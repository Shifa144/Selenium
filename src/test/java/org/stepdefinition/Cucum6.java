package org.stepdefinition;

	import io.cucumber.datatable.*;

	import java.util.List;
import java.util.Map;

import org.base.BaseClass;
	import org.sample.SignInPage;

	import cucumber.api.java.en.Given;
	import cucumber.api.java.en.When;

	public class Cucum6 extends BaseClass {
		
	     SignInPage s ;
		@Given("To launch the browser and maximize the window")
		public void to_launch_the_browser_and_maximize_the_window() {
			launchBrowser();
			windowMaximize();
		    
		}

		@When("To launch the url of the fb application")
		public void to_launch_the_url_of_the_fb_application() {
			launchUrl("https://en-gb.facebook.com/");
		   
		}

		@When("To click the create new account button")
		public void to_click_the_create_new_account_button() {
			s= new SignInPage();
			clickBtn(s.getCreateNewAcc());
		    
		}

		@When("To pass the first name in first name field")
		public void to_pass_the_first_name_in_first_name_field(DataTable d) throws InterruptedException {
			Thread.sleep(3000);
			
		Map<String , String> m = d.asMap(String.class, String.class);
			s= new SignInPage();
			passText(m.get("firstname3"), s.getFirstTextBox());
		    
		}

		@When("To pass the last name in last name field")
		public void to_pass_the_last_name_in_last_name_field() {
			s= new SignInPage();
			passText("Musthafa", s.getLastTextBox());
		}

		@When("To pass mobileno or email in required field")
		public void to_pass_mobileno_or_email_in_required_field(DataTable d) {
			
			List<Map<String, String>> m = d.asMaps();
			s= new SignInPage();
			passText(m.get(1).get("password"), s.getEmailBox());
		    
		}

		@When("To create new password in new password field")
		public void to_create_new_password_in_new_password_field() {
			s= new SignInPage();
			passText("123456", s.getCreatePassword());
		}

		

	
}