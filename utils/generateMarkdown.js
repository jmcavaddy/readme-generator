// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (data.license === 'Apache 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (data.license === 'GPL 3.0') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (data.license === 'BSD 3') {
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else {
    return ''
  }
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) { 
  if (data.license === 'MIT') {
    return `https://opensource.org/licenses/MIT`
  } else if (data.license === 'Apache 2.0') {
    return `https://opensource.org/licenses/Apache-2.0`
  } else if (data.license === 'GPL 3.0') {
    return `https://www.gnu.org/licenses/gpl-3.0`
  } else if (data.license === 'BSD 3') {
    return `https://opensource.org/licenses/BSD-3-Clause`
  } else {
    return ''
  }
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license === 'None') {
    return ''
  } else {
  return `
## License
This project is licensed under the ${data.license} license.  
For more information, please visit [this link](${renderLicenseLink(data)}).
`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data)}
## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}
${renderLicenseSection(data)}
## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
Contact me with questions regarding this software at ${data.questionsEmail}.
View more of my work at my [GitHub page](https://github.com/${data.questionsGitHubUsername})!
`;
}

module.exports = generateMarkdown;