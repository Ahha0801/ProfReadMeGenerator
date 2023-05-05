// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error) {
      return console.log(+error);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  // first thing to do is ask the user some questions to gather data about the README
  console.log("Hello, Create a Professional README Generator file today");

  inquirer
    .prompt([
      // questions go here
      {
        type: "input",
        name: "projectTitle",
        message: "Enter a name for your project",
      },
      {
        type: "input",
        name: "projectDescription",
        message: "Whats is the project description?",
      },
      {
        type: "input",
        name: "installation",
        message: "Installation process for the project here",
      },
      {
        type: "input",
        name: "usage",
        message: "What is the usage instructions for this project?",
      },
      {
        type: "list",
        name: "projectlicense",
        message: " choose a license type",
        choices: [
          "Apache",
          "MIT",
          "Boost",
        ],
      },
      {
        type: "input",
        name: "tests",
        message: "What are the available test and how to run them?",
      },
      {
        type: "input",
        name: "projectGithub",
        message: "enter the url for the github repo for this project",
      },
      {
        type: "input",
        name: "github",
        message: "What is your github username? ",
      },
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
    ])
    .then((answers) => {
      //create mark down file from asnwers
      generateMarkDown(answers);
    });
}

const generateMarkDown = (userAnswers) => {
  //takes answers from user and creates mark down from it
  console.log("USER ANSWERS: ", userAnswers);

  // const markdown = (userAnswers) => {
  //   return ` # Here is all you need to know about my project
  //
  // # Project Title: ${userAnswers.projectTitle}
  //
  // ## Project Github URL: ${userAnswers.projectGithub}
  //
  // ## Installation:${userAnswers.installation}
  //
  // ## Usage:${userAnswers.Usage}
  //
  // ## Contribution:${userAnswers.projectGithub}
  //
  // ## Test:${userAnswers.tests}
  // `;
  // };

  // once i have created the markdown (basically just text), I will create a README file with it
  console.log("creating markdown file");
  writeToFile("README.md", generateMarkdown(userAnswers));
  console.log("Markdown file created!");
};

// Function call to initialize app
init();
