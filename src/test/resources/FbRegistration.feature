
@Feature2
Feature:To validate the account creation of fb application

@Sanity
Scenario:To create new account
Given To launch the browser and maximize the window
When To launch the url of the fb application
And To click the create new account button

# One dimensional map data
And To pass the first name in first name field
#Key       value
|firstname1|shifa|
|firstname2|azar|
|firstname3|sait|
|firstname4|jeri|

And To pass the last name in last name field

# Two dimensional map data
And To pass mobileno or email in required field
|password1|password2|password3|
|1233554|aaaaaaa|ddddddoooo|
|2345676|rrrrrrrr|wwwwwwww|
|hjuifh123|wertghy|tghifds|
|oenfutnf|hjiufg|hsjiudgooo|

And To create new password in new password field
Then To close the Browser


