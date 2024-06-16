# CycloReg

This is a simple application for keeping track of registrations for cycling events.

## Installation

Clone this repository and save it to your local environment. Navigate to the server directory and run "pipenv install" to install the back end dependencies. Next, navigate to the client directory and run "npm install" to install the front end dependencies.

# Running the Program

## Database

Navigate to the server directory and run "pipenv shell" to enter the virtual environment. Next, run "flask db migrate" to initialize the database on your machine, followed by "flask db upgrade head" to complete the migration. Alter the seed.py file as desired before running 'python seed.py' to seed the database. Please not that at this time there is no functionality for creating cyclists in the front end, so this must be done either through seed.py or flask shell.

## Server

While in the server directory, run "python app.py" to start the server. It's set up to run locally on port 5555, although this can be changed in app.py. If it is changed it's necessary to change the proxy to match in the package.json file in the client directory.

## React App

Navigate to the client directory and run "npm start" to compile the react app which will automatically open a browser window with the app running in it.

# Usage

View, add, modify, and delete races on the races page accessible through the races link in the navigation bar. You are also able to view and delete registrations from the race details view. On the cyclists page you can view cyclists and their registrations, as well as create and delete registrations associated with any given cyclist.

# Acknowledgments

* Justin Rodriguez for keeping me on track.
* Leo Stratus for constant encouragement and advice.