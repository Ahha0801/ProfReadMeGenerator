// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown');
const util = require('util');

// TODO: Create a function to write README file
function writeToFile(fileName, UserAnswers) {
    fs.writeFile(fileName, UserAnswers, error => {
        if (error) {
          return console.log( + error);
        }
      })
}

// TODO: Create a function to initialize app
function init() {
  // first thing to do is ask the user some questions to gather data about the README
  console.log('Hello, Create a Professional README Generator file today')

  inquirer.prompt([
    // questions go here
    {
      type: 'input',
      name: 'projectTitle',
      message: "Enter a name for your project"
    },
    {
      type: 'input',
      name: 'projectDescription',
      message: 'Whats is the project description?'
    },
    {
      type:'input',
      name: 'installation',
      message:'Installation Processfor the project here'
    },
    {
      type:'input',
      name: 'Usage',
      message:'What is the usage instructions for this project?'
    },
    {
      type: 'input',
      name: 'projectGithub',
      message: "enter the url for the github repo for this project"
    },
    {
      type: 'list',
      name: 'projectlicense',
      message: ' choose a license type',
      choices: ['Apache License 2.0', 'MIT License', 'Boost Software License 1.0']
    },
    {
      type: 'input',
      name: 'Github Contribution',
      message: 'Other contributors '
    },
    {
      type:'input',
      name: 'tests',
      message:'What are the available test and how to run them?'
    },
  
  ])
  .then((answers) => {
    //create mark down file from asnwers 
    createMarkDown(answers)
  })
}

const createMarkDown=(UserAnswers)=>{
  //takes answers from user and creates mark down from it 
  console.log('USER ANSWERS: ', UserAnswers)


  const markdown = `
  Here is all you need to know about my project

  Project Title: ${UserAnswers.projectTitle}

  Project Github URL: ${UserAnswers.projectGithub}
  
  Installation:${UserAnswers.installation}

  Usage:${UserAnswers.Usage}

  Contribution: ${UserAnswers.contributaion}

  Test:${UserAnswers.test}
  `


  // once i have created the markdown (basically just text), I will create a README file with it
  console.log('creating markdown file')
  writeToFile("README.md", markdown)
  console.log('Markdown file created!')
}


// Function call to initialize app
init();