// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');
const { generateKey, generatePrime } = require('crypto');





// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the project title?',
    name: 'Title',

},
    {
        type: 'input',
        message: 'What is your Description for the project?',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'What are the contents of the project?',
        name: 'Contents',
    },
    {
        type: 'input',
        message: 'What are the Installation instructions?',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'What are the usage information?',
        name: 'Usage',


    },

];
inquirer
    .prompt([(questions)
        /* Pass your questions in here */
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        return generateMarkdown (answers);

    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    module.exports;
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
