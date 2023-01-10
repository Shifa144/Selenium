
@Feature1
Feature: To validate the login functionality of facebook applications

Background:
Given To launch the chrome browser and maximize window

@Regression
Scenario:To validate with valid email and invalid password
When To launch the url of the  facebook applications
And To pass valid username in email field
And To pass invalid password in password field
And To click Login button
And To check whether navigate to homePage or not
Then To close the Browser


@Smoke
Scenario Outline: to validate the positive and negative combination of login functionality
When User has to hit the facebook url
And User has to pass the data "<emaildatas>" in email field
And User has to pass the data "<passworddatas>" in password field
And User has to  click Login button
Then User has to close the browser

Examples:
|emaildatas       |passworddatas|
|selenium@gmailcom|inmakes      |
|inamkes@gmail.com|12345        |
|shifa@gmail.com  | shifa44     |
|azar@gmail.com   |azar4445     |
