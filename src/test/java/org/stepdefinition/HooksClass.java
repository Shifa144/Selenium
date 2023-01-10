package org.stepdefinition;


import org.base.BaseClass;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HooksClass extends BaseClass {

	
	//Preconditions
	@Before
	private void Preconditions() {
		launchBrowser();
		windowMaximize();

	}
	
	
	//Postcondition
	@After
	private void postconditions() {
		closeEntireBrowser();
}
}