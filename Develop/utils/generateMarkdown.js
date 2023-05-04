// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT'){
    return '[! link]'
  }
  else if(license== 'GNU'){
    return '[! link ]'
  }
  else if ( license== ' name'){
    return '[! link]'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(UserAnswers) {
  return `#Title
   ${UserAnswers.title}

${renderLicenseBadge(Useranswers.license)}

## Description
${UserAnswers.description}
## Table of Content
[Installation](# Installation)
[Usage](#Usage)
[Contribuation](#Contribuation)
[Test](#Test)
[Question](#Question)


##Installation
${UserAnswers.installation}

##Usage
${UserAnswers.usage}

##License
${renderLicenseLink(data.license)}

##Contribution 
${UserAnswers.contributaion}

##Test
${UserAnswers.test}


##Question
GitHub Profile ${data.questionGitHub}
Reach via Email ${data.questionEmail}


${renderLicenseLink(data.license)}

`;
}

module.exports = generateMarkdown;
