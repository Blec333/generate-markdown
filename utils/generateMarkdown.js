// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseObj, listOfLicenses, licenseChoice) {
  if (licenseChoice != '') {
    return `<img title="badge" alt="badge" src="${licenseObj[listOfLicenses.indexOf(licenseChoice)].badge}"/>`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseObj, listOfLicenses, licenseChoice) {
  if (licenseChoice != '') {
    return licenseObj[listOfLicenses.indexOf(licenseChoice)].link;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(listOfLicenses, licenseChoice) {
  if (licenseChoice != 'No License') {
    return licenseChoice;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
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
  \n
  ${link}`;

  return writeString;
}

module.exports = {renderLicenseBadge, renderLicenseLink, renderLicenseSection, generateMarkdown};
