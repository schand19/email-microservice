# NodeJS Microservice

NodeJS Email Microservice 

# Project setup steps

* Install node in the system from "https://nodejs.org/en/download/"
* Create a root folder and open it in visual studio code.
* clone the project from github using the below link
  git clone https://github.com/schand19/email-microservice.git
* Navigate to the project root folder in the terminal.
* In the terminal, install the dependencies using command "npm install"


# Prerequisits- setup email and allow third party to send emails (example: i had taken gmail)
* Login into email account and go to the admin console.
* Go to Security tab.
* Make sure '2-step verification' is enabled for your mail account, If not please setup.
* Go to "app passwords" and under app passwords, select the app under dropdown by selecting "Other (custome name)" and provide name "nodemailer".
* Click next to view/copy the reandome password to for sending emails.
* This password is to be used in the request payload of the API.

# Instructions to run the service

* start the project using "npm start" which starts the project in port 4000.
* Open Postman and creat a "POST" request using the url "http://localhost:4000/send-email"
* enter the request payload in the body section as show in below
{ "mailService": "gmail",
  "userName" : "<your email>,
  "password" : "<password taken from gmail app passwords>", 
  "fromMail" : "<your email>",
  "toMail" : "<recepient mail id>",
  "subject" : "<subject of mail>",
  "text" : "<mail content>"}

* Click send -> 
* If the request pay load is valid, the APi responds with response code 200 OK and "email sent successfully"
* If the request payload is invalid, the API responds with error message.
