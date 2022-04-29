// If there is no license, return an empty string
function renderLicenseBadge(licenseObj, listOfLicenses, licenseChoice) {
  if (licenseChoice != '') {
    return `<img title="badge" alt="badge" src="${licenseObj[listOfLicenses.indexOf(licenseChoice)].badge}"/>`;
  } else {
    return '';
  }
}

// If there is no license, return an empty string
function renderLicenseLink(licenseObj, listOfLicenses, licenseChoice) {
  if (licenseChoice != '') {
    return licenseObj[listOfLicenses.indexOf(licenseChoice)].link;
  } else {
    return '';
  }
}

// If there is no license, return an empty string
function renderLicenseSection(listOfLicenses, licenseChoice) {
  if (licenseChoice != 'No License') {
    return licenseChoice;
  } else {
    return '';
  }
}

// Function to generate markdown for README
function generateMarkdown(fileName, data, license, badge, link) {
let writeString = 
`# ${data.title}
\n
${badge}
\n
## Description
\n
${data.description}
\n
## Table of Contents
\n
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)
\n
## Installation
\n
${data.installation}
\n
## Usage
\n
${data.usage}
\n
## Contribution
\n
${data.contribution}
\n
## Tests
\n
${data.tests}
\n
## License
\n
${license}
${link}
\n
## Questions
\n
Please visit my GitHub profile here: https://github.com/${data.github}
If you have any questions, please feel free to [contact me here](mailto:${data.email}). -- [${data.email}]`;

  return writeString;
}

module.exports = {renderLicenseBadge, renderLicenseLink, renderLicenseSection, generateMarkdown};
