const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
        .then((response) => {
            console.log(response);
            const markdown = generateMarkdown(response);
            fs.writeFile('createdREADME.md', markdown, (err) =>
                err ? console.log(err) : console.log('Success!')
            );
        });
}

// Function call to initialize app
init();