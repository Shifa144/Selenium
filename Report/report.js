$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/FbRegistration.feature");
formatter.feature({
  "name": "To validate the account creation of fb application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature2"
    }
  ]
});
formatter.scenario({
  "name": "To create new account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature2"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "To launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "Cucum6.to_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To launch the url of the fb application",
  "keyword": "When "
});
formatter.match({
  "location": "Cucum6.to_launch_the_url_of_the_fb_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the create new account button",
  "keyword": "And "
});
formatter.match({
  "location": "Cucum6.to_click_the_create_new_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the first name in first name field",
  "rows": [
    {
      "cells": [
        "firstname1",
        "shifa"
      ]
    },
    {
      "cells": [
        "firstname2",
        "azar"
      ]
    },
    {
      "cells": [
        "firstname3",
        "sait"
      ]
    },
    {
      "cells": [
        "firstname4",
        "jeri"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Cucum6.to_pass_the_first_name_in_first_name_field(DataTable)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//input[@type\u003d\u0027text\u0027])[2]\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-VUVTIUS\u0027, ip: \u0027192.168.1.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.4.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:64041}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5e2ae05405b9bd2ac043750d1edb380b\n*** Element info: {Using\u003dxpath, value\u003d(//input[@type\u003d\u0027text\u0027])[2]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy16.sendKeys(Unknown Source)\r\n\tat org.base.BaseClass.passText(BaseClass.java:49)\r\n\tat org.stepdefinition.Cucum6.to_pass_the_first_name_in_first_name_field(Cucum6.java:43)\r\n\tat ✽.To pass the first name in first name field(src/test/resources/FbRegistration.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "To pass the last name in last name field",
  "keyword": "And "
});
formatter.match({
  "location": "Cucum6.to_pass_the_last_name_in_last_name_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To pass mobileno or email in required field",
  "rows": [
    {
      "cells": [
        "password1",
        "password2",
        "password3"
      ]
    },
    {
      "cells": [
        "1233554",
        "aaaaaaa",
        "ddddddoooo"
      ]
    },
    {
      "cells": [
        "2345676",
        "rrrrrrrr",
        "wwwwwwww"
      ]
    },
    {
      "cells": [
        "hjuifh123",
        "wertghy",
        "tghifds"
      ]
    },
    {
      "cells": [
        "oenfutnf",
        "hjiufg",
        "hsjiudgooo"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Cucum6.to_pass_mobileno_or_email_in_required_field(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To create new password in new password field",
  "keyword": "And "
});
formatter.match({
  "location": "Cucum6.to_create_new_password_in_new_password_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber3.to_close_the_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/Sample.feature");
formatter.feature({
  "name": "To validate the login functionality of facebook applications",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature1"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser and maximize window",
  "keyword": "Given "
});
formatter.match({
  "location": "Cucumber3.to_launch_the_chrome_browser_and_maximize_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate with valid email and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "To launch the url of the  facebook applications",
  "keyword": "When "
});
formatter.match({
  "location": "Cucumber3.to_launch_the_url_of_the_facebook_applications()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass valid username in email field",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber3.to_pass_valid_username_in_email_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass invalid password in password field",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber3.to_pass_invalid_password_in_password_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber3.to_click_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To check whether navigate to homePage or not",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber3.to_check_whether_navigate_to_homePage_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber3.to_close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "to validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.step({
  "name": "User has to pass the data \"\u003cemaildatas\u003e\" in email field",
  "keyword": "And "
});
formatter.step({
  "name": "User has to pass the data \"\u003cpassworddatas\u003e\" in password field",
  "keyword": "And "
});
formatter.step({
  "name": "User has to  click Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emaildatas",
        "passworddatas"
      ]
    },
    {
      "cells": [
        "selenium@gmailcom",
        "inmakes"
      ]
    },
    {
      "cells": [
        "inamkes@gmail.com",
        "12345"
      ]
    },
    {
      "cells": [
        "shifa@gmail.com",
        "shifa44"
      ]
    },
    {
      "cells": [
        "azar@gmail.com",
        "azar4445"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser and maximize window",
  "keyword": "Given "
});
formatter.match({
  "location": "Cucumber3.to_launch_the_chrome_browser_and_maximize_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "to validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "Cucumber4.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"selenium@gmailcom\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber4.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"inmakes\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber4.user_has_to_pass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to  click Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber4.user_has_to_click_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber4.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser and maximize window",
  "keyword": "Given "
});
formatter.match({
  "location": "Cucumber3.to_launch_the_chrome_browser_and_maximize_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "to validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "Cucumber4.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"inamkes@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber4.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"12345\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber4.user_has_to_pass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to  click Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber4.user_has_to_click_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber4.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser and maximize window",
  "keyword": "Given "
});
formatter.match({
  "location": "Cucumber3.to_launch_the_chrome_browser_and_maximize_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "to validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "Cucumber4.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"shifa@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber4.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"shifa44\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber4.user_has_to_pass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to  click Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber4.user_has_to_click_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber4.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser and maximize window",
  "keyword": "Given "
});
formatter.match({
  "location": "Cucumber3.to_launch_the_chrome_browser_and_maximize_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "to validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "Cucumber4.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"azar@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber4.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"azar4445\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber4.user_has_to_pass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to  click Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber4.user_has_to_click_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber4.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});