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
  console.log("Testing the terminal");
  return `# ${data.Title}
  ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

  ## Description
  ${data.Description}

  ## Table of Contents
  *[Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
 
## Installation
${data.Installation}

## License
This project is license under ${data.license}


## Contributors 
${data.contributors}


## Tests
${data.test}



`;
}
// module.exports is an object we use to store variables or methods
module.exports = generateMarkdown;
