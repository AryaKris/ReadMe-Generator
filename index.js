// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is your GitHub user name?',
    name: 'username'
},
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please write a short description of your project',
        name: 'Description'
    },
    {
        type: 'input',
        message: 'What kind of license does your project have?',
        name: 'license'
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'dependencies'
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What does the user needs to know about contributing to tthe repo?',
        name: 'contribution'
    },

];

// fs.writeFile('markDown.md', markDownContent, (err) =>
//     err ? console.log(err) : console.log('Successfully created markDown.md!'));

// TODO: Create a function to write README file
function writeFile(fileName, data) {
    module.exports;
}

// TODO: Create a function to initialize app
function init() {
  
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers); 
        });
 }

// Function call to initialize app
init();
