# NAT20-Web-App

This code is for CAPSTONE 49900 02 11973. It is a Website that supplies a character build tool, where the user can create their DnD character easy and fast with the supplied information. They can be able to save their characters and chat with other users.

## Setup Instructions

# PSQL Setup
Postgres must be installed to test this project. Start the server, open the Postgres window, and double click the postgres database as shown in the video below. 

https://user-images.githubusercontent.com/47779642/140804426-489aef16-7446-41da-b847-ac2348a480b2.mov

From this terminal instance, you can create the database with the line below. 

```
postgres=# CREATE DATABASE auth_system OWNER postgres;
```
NOTE: If you select an owner other than postgres, settings.py located at backend/auth_system/settings.py must be changed at line 97 and 119 to change the user to the owner of the auth_sytem databse you create. Ignore if you copy the command above verbatim. 

This is the database where user information and builds will be stored. 


# BACK END: Setting up Django Project
Template is written with django 3.2.7 and python 3 in mind.
If you don't have django installed for python 3 then run:

    $ pip3 install django

### Main features

* Separated dev and production settings

* Custom user model

* User registration and logging

* Separated requirements files

* PostgreSQL by default if no env variable is set

In order to test out this project, follow these steps:

clone the repository:

- in the frontend folder, run: npm install, this will install the required frontend packages
- in the frontend folder, run: npm run build, this will make a build folder and copy it into the backend folder
- then cd to the backend folder to activate the virtual environment in by running: 

$ source venv/bin/activate

- in the backend folder, run: 

$ pip3 install -r requirements.txt


Then under backend/auth_system/settings.py:

-   under DATABASES, set the PASSWORD field to your database password
-   under EMAIL_HOST_USER, set the email that you want to use
-   under EMAIL_HOST_PASSWORD, set the app password that you setup for your email

After updating settings.py, you can now migrate the models to the postgres database. 
In the same terminal in the backend folder run:

```
$ python3 manage.py makemigrations
$ python3 manage.py migrate
```



# FRONT END: Getting Started with the React App

First cd into the frontend folder.

Next install all dependicies.

In the project directory, you can run:

### `npm install`
this will download all the libraries from the package.json file, used in this code.

### Compile the Front-End
Run the production compile script

First create a .env file in the frontend folder. 
Add the following line in the .env file:
`REACT_APP_API_URL='http://localhost:8000'`

### `npm run build`
Builds the app for production to the `build` folder, and copies this folder into the Backend Folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

After the build is copied to the backend folder, you are now ready to run the app from the backend.

-cd back into the backend folder
-then run the app by typing:

`python3 manage.py runserver`



This runs the app in the development mode.\
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

