package org.sample;

import org.base.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PageObjectModel1 extends BaseClass{
 
	//1.non Parameterized constructor
	 
	public PageObjectModel1()  {
		PageFactory.initElements(driver, this);
		//this refers to current Class variables,current class webElemtns means webElements
	}
		
		//2.Private webElements
		//webElements email =driver.findElements(By.id("email"));
		//only one locator can be given
	
		@FindBy(id="email")
		private WebElement email;
		
		@FindBy(xpath="//input[@name='pass']")
		private WebElement pass;
		
		@FindBy(name="login")
		private WebElement loginbtn;
		
		//getters to access webElements outside the class
		public WebElement getEmail() {
			return email;
		}
		
	public WebElement getPass() {
			return pass;
	}

		public WebElement getLoginbtn() {
			return loginbtn;
		}
		
		
		
		
	}

