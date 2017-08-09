# Better Doctor Lookup

#### Simple JavaScript/Node.js to look up local doctors in the Portland, OR area who treat a specific medical issue.

#### By Nicole Freed

## Description

Simple JavaScript/Node.js app to look up local doctors in the Portland, OR area who treat a specific medical issue. The app returns a list of available specialties in a dropdown menu. The user can enter a specific medical issue (e.g. "cough," "migraines," "PMS") into a form and retrieve a list of doctors who treat that condition.

## Prerequisite Installations

* *API Key*
* For this project, you'll need to sign up for an API key from BetterDoctor.com.
  * Visit the BetterDoctor API site at https://developer.betterdoctor.com and click “Get a free API key”.
  * Fill out the form, listing Epicodus as the Organization/Company Name.
  * Your API key should be listed on the front page (ex: “a2c356ibgh44…..”) or under My Account > Applications. Save this for the setup and installation, below.

* *Text Editor*
* You'll also need a pure text editor. You may use TextEdit on a Mac or Notepad on Windows, your favorite text editor such as Sublime, Brackets, or TextWrangler, or you may download a text editor (we recommend Atom: https://atom.io). Don't use Microsoft Word or other word processing software, as they insert invisible characters that can cause problems in software development.

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

* *In Terminal and Atom (or other text editor):*
  * Navigate to the desktop by typing `cd desktop`.
  * Clone the project to your desktop from Github using `git clone https://github.com/gitasong/doctor-lookup.git`.
  * Navigate to the project directory with `cd doctor-lookup`.
  * Once inside the project directory, create the file that will hold your API key using `touch .env`.
  * Open the `.env` file in Atom (or another text editor) using `atom .env` (if using another text editor, replace `atom` with the name of your text editor).
    * In Atom, add this line to the `.env` file: `exports.apiKey = "YOUR-API-KEY-HERE";`, replacing `YOUR-API-KEY-HERE` with the API key you got from BetterDoctor.com, above.
    * Save and close the file.
  * Back in Terminal, run the command `npm install`.
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
