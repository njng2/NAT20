# NAT20-Web-App

This code is for CAPSTONE 49900 02 11973. It is a Website that supplies a character build tool, where the user can create their DnD character easy and fast with the supplied information. They can be able to save their characters and chat with other users.

## Setup Instructions

# BACK END: Setting up Django Project
Template is written with django 3.2.7 and python 3 in mind.

### Main features

* Separated dev and production settings

* Custom user model

* User registration and logging

* Separated requirements files

* PostgreSQL by default if no env variable is set

In order to test out this project, follow these steps:

clone the repository
in the frontend folder, run: npm install, this will install the required frontend packages
in the frontend folder, run: npm run build, this will make a build folder and copy it into the backend folder
then activate the virtual environment by running: source venv/bin/activate
in the backend folder, run: pip install -r requirements.txt

Then under backend/auth_system/settings.py:

-   under DATABASES, set the PASSWORD field to your database password
-   under EMAIL_HOST_USER, set the email that you want to use
-   under EMAIL_HOST_PASSWORD, set the app password that you setup for your email

run backend server by typing: python3 manage.py runserver
Keep this server running while running the frontend. The best way to do this is by having 2 seperate terminals. 

# FRONT END: Getting Started with the React App

First cd into the frontend folder.

Next install all dependicies.

In the project directory, you can run:

### `npm install`
this will download all the libraries from the package.json file, used in this code.

### Compile the Front-End
Run the production compile script
First
### `npm run build`
Builds the app for production to the `build` folder.\ copy this file and put it in the Backend Folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

Second
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

