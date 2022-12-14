# express-js-note-taker

[![License](https://img.shields.io/badge/License-MIT_License-blue.svg)](https://mit-license.org/)

## Description

The objective of this project was to create an application that lets the user write notes and save them in a database. 

The objective of this project was to create a command-line application that generated a HTML file, which displays a team profile with cards for each team member. The information to populate the cards is provided by the user via the command-line using the npm package called Inquirer(v8.2.4).

More details about running the application are included in the Usage section, which also includes a link to a video walkthrough.

One initial challenge in this project was setting up the classes and subclasses for the various employee types. The Employee class was used to set properties and methods related to name, id, email and role. The Manager, Engineer, and Intern classes all extend Employee to use those properties and methods. Each of the subclasses also had a property unique to their specific subclass.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

In order to use this application the user needs to install Node dependencies with npm, by running the following command in their command-line - “npm install”.

## Usage

Once the dependencies are installed, the user can use the command line to start answering the inquirer prompts by entering the following command - “node index.js”. The user will need to answer the questions related to the Manager before being able to continue to enter information about an Engineer, Intern or select that they are finished. The user can enter the details for as many Engineers or Interns as the would like, and can end the process after any entry by selecting that they are finished and then the HTML file will be generated.

A video walkthrough of the command-line application being used is included at the link below:<br />
https://user-images.githubusercontent.com/111654725/206064689-70b698d9-0186-46a6-8d08-d6209275f1f5.mp4

## License

This project is licensed under the terms of the MIT License. The license badge at the top of this README includes a link to the description of the license.

## Contributing

N/A

## Tests

Tests for this project were run using the npm package Jest, which was installed as a development dependency. A test was created for each of the 4 classes, which would pass if an object was created if provided valid arguments.

## Questions

If you have any questions about this project, please reach out via email. <br />
Email: parkerjmathis@gmail.com
<br />
GitHub: (https://github.com/markerpathis)
