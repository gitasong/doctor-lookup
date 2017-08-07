# Better Doctor Lookup

#### Simple JavaScript/Node.js to look up local doctors in the Portland, OR area who treat a specific medical issue.

#### By Nicole Freed

## Description

Simple JavaScript/Node.js app to look up local doctors in the Portland, OR area who treat a specific medical issue. The app returns a list of available specialties. The user can enter a specific medical issue (e.g. "cough," "migraines," "PMS") and retrieve a list of doctors who treat that condition.

## Prerequisite Installations

* *Node.js using Homebrew*
  * *Mac:*
    * To install Node.js, you'll need Homebrew. If you do not have Homebrew installed, you may install it using the following commands:
      * In Terminal: `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`,
      * then `echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile`.
      * Next, to install Node.js, execute the following commands in Terminal:
        * `brew install node`
        * `node -v` (to check your Node version; should be 4.0.x or higher)
        * `npm -v` (to check your npm version; should be 3.6.x or higher)
  * *Windows/Linux:*
    * Go to https://nodejs.org/en/download/ and download the appropriate package for your operating system.

## Setup/Installation Instructions

* *In Terminal:*
  * Navigate to the desktop by typing `cd desktop`.
  * Clone the project to your desktop from Github using `git clone https://github.com/gitasong/doctor-lookup.git`.
  * Navigate to the project directory with `cd doctor-lookup`.
  * Run the command `npm install`.
  * Run the command `bower install`.
  * Run the command `gulp build`.
  * Run the command `gulp serve` to start the server. The project should open up in your browser.
  * Follow the instructions onscreen.

## Known Bugs

No message displays yet when there are no results. This will be fixed in a later version.

## Support and contact details

You can contact me with questions or inquiries at gitasong@github.io.

## Technologies Used

* HTML 5
* Bootstrap 3
* JQuery 3.2.1
* JavaScript 5
* Homebrew (to install Node.js)
* Node.js 8.2.1
* npm (Node package manager) 5.3.0
* Gulp (task runner) 3.9.1
* Bower (front-end dependency manager) 1.8.0
* AJAX (for API requests)
* Better Doctor API (https://developer.betterdoctor.com)

### License

This project is licensed under the MIT license.

Copyright (c) 2017 Nicole Freed. All rights reserved.
