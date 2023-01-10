package org.sample;

import org.base.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SignInPage extends BaseClass{
	public SignInPage() {
		PageFactory.initElements(driver, this);
	}
    
	@FindBy(xpath="//a[text()='Create New Account']")
	private WebElement createNewAcc;
	
	
	@FindBy(xpath="(//input[@type='text'])[2]")
	private WebElement firstTextBox;
	
	@FindBy(name="lastname")
	private WebElement lastTextBox;
	
	@FindBy(name="reg_email__")
	private WebElement emailBox;
	
	@FindBy(id="password_step_input")
	private WebElement createPassword;

	public WebElement getCreateNewAcc() {
		return createNewAcc;
	}

	public WebElement getFirstTextBox() {
		return firstTextBox;
	}

	public WebElement getLastTextBox() {
		return lastTextBox;
	}

	public WebElement getEmailBox() {
		return emailBox;
	}

	public WebElement getCreatePassword() {
		return createPassword;
	}
}
