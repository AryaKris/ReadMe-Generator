// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


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
    type: "list",
    name: "license",
    message: "Choose the appropriate license for this project: ",
    choices: [
        "Apache",
        "Academic",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open"
    ]


},
{
    type: 'input',
    message: 'Please write a short description of your project',
    name: 'description'
},

{
    type: 'input',
    message: 'How to install and run the project?',
    name: 'install'
},
{
    type: 'input',
    message: 'What command should be run to run tests?',
    name: 'tests'
},
{
    type: 'input',
    message: 'What does the user needs to know about contributing to tthe repo?',
    name: 'contributors'
},

{
    type: 'input',
    message: 'How to use the project?',
    name: 'usage'
},

];


// TODO: Create a function to write README file
function writeFile(fileName, data) {
    // get that data value containeing
    module.exports;
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created ReadmeGenerator.md!')
    );
}

// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt(questions)
        .then((answers) => {
            const data = generateMarkdown(answers);
            writeFile('READMEGenerator.md', data);
        });
}

// Function call to initialize app
init();
