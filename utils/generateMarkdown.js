// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {  if (license == 'MIT'){
  return '[! link]'
}
else if(license== 'GNU'){
  return '[! link ]'
}
else if ( license== ' name'){
  return '[! link]'
}}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return '\n* [lincense(#lincses)\n*';
  }
  return '';

}
// function to generate markdown for README
function generateMarkdown(data) {
  // returns inquirer prompted data. Writing in markdown inside backticks and using data to personalize markdown page.
  return `# ${data.projectTitle}
----
<a href="https://img.shields.io/badge/License-${data.projectlicense}-brightgreen"><img src="https://img.shields.io/badge/License-${data.projectlicense}-brightgreen"></a>
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test Instructions](#test-instructions)
- [Contact Information](#contact-information)
### Description
${data.projectDescription}
### Installation
${data.installation}
### Usage
${data.usage}
### Contribution
${data.name}
### Test-Instructions
${data.tests}
### Contact-Information
[Github Profile](https://github.com/${data.github})
${data.email}
`;
}
// generateMarkdown function
module.exports = generateMarkdown;