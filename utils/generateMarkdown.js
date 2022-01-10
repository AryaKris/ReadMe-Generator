// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("Testing the terminal", data);
  const readMeGenerator = 
    `## ${data.title}
 ![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)



## Description
${data.description}

## Table of Contents 

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)


## Installation

 ${data.install}

## Usage

${data.usage}


## License 

This project is licensed under ${data.license}



## Contributing

${data.contributors}

## Tests

${data.tests}

## Questions

${data.queries}

`
  return readMeGenerator;

  // create a variable and give the value of the Readme.md file as its value
  // return the variable from here
}
// module.exports is an object we use to store variables or methods
module.exports = generateMarkdown;
