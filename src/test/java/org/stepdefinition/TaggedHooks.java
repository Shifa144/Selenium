package org.stepdefinition;

import org.base.BaseClass;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class TaggedHooks extends BaseClass {

	//Preconditions
		@Before(order=1)
		private void Preconditions2() {
			launchBrowser();
			System.out.println("launch Browser");
			

		}
		
		@Before(order=2)
		private void Preconditions1() {
			windowMaximize();
			System.out.println("windowMaximize");

		}
		@Before(order=5, value ="@Smoke")
		private void Preconditions3() {
			System.out.println("Precondition 3");

		}
		
		
		//Postcondition
		@After(order=10, value="@Smoke")
		private void postconditions2() {
			System.out.println("Take screenshots of scenarios");
	}
		@After(order=4)
		private void postconditions1() {
			closeEntireBrowser();
			System.out.println("close entire browser");
	}
}
