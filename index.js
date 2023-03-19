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
    {
        type: 'input',
        name: 'description',
        message: "Provide a short description explaining the what, why, and how of your project.\nUse the following questions as a guide: \n - What was your motivation? \n - Why did you build this project? \n - What problem does it solve? \n - What did you learn? \n - What makes your project stand out?"
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Add guidelines for how you would like other developers to contribute to your project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Go the extra mile and write tests for your application.\nThen provide examples on how to run them.'
    },
    {
        type: 'input',
        name: 'questionsGitHubUsername',
        message: 'Please provide your GitHub username for users to view your other.'
    },
    {
        type: 'input',
        name: 'questionsEmail',
        message: 'Please provide an email address with which users can contact you regarding questions about your software.'
    }
];

function init() {

    inquirer.prompt(questions)
        .then((response) => {
            console.log(response);
            const markdown = generateMarkdown(response);
            fs.writeFile('generatedREADME.md', markdown, (err) =>
                err ? console.log(err) : console.log('Success!')
            );
        });
}

// Function call to initialize app
init();