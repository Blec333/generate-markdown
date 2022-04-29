
// Packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const genMD = require("./utils/generateMarkdown.js");

// Array of questions for user input
const licenseOptions = [
    {
        name: 'No License',
        badge: '',
        link: ''
    },
    //Apache
    {
        name: 'Apache 2.0 License',
        badge: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
        link: 'https://opensource.org/licenses/Apache-2.0'
    },
    //Boost
    {
        name: 'Boost Software License 1.0',
        badge: 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
        link: 'https://www.boost.org/LICENSE_1_0.txt'
    },
    //BSD
    {
        name: 'BSD 3-Clause License',
        badge: 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
        link: 'https://opensource.org/licenses/BSD-3-Clause'
    },
    {
        name: 'BSD 2-Clause License',
        badge: 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg',
        link: 'https://opensource.org/licenses/BSD-2-Clause'
    },
    //Creative Commons
    {
        name: 'CC0-1.0',
        badge: 'https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg',
        link: 'http://creativecommons.org/publicdomain/zero/1.0/'
    },
    {
        name: 'Attribution 4.0 International',
        badge: 'https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg',
        link: 'https://creativecommons.org/licenses/by/4.0/'
    },
    {
        name: 'Attribution-ShareAlike 4.0 International',
        badge: 'https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg',
        link: 'https://creativecommons.org/licenses/by-sa/4.0/'
    },
    {
        name: 'Attribution-NonCommercial 4.0 International',
        badge: 'https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg',
        link: 'https://creativecommons.org/licenses/by-nc/4.0/'
    },
    {
        name: 'Attribution-NoDerivates 4.0 International',
        badge: 'https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg',
        link: 'https://creativecommons.org/licenses/by-nd/4.0/'
    },
    {
        name: 'Attribution-NonCommmercial-ShareAlike 4.0 International',
        badge: 'https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg',
        link: 'https://creativecommons.org/licenses/by-nc-sa/4.0/'
    },
    {
        name: 'Attribution-NonCommercial-NoDerivatives 4.0 International',
        badge: 'https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg',
        link: 'https://creativecommons.org/licenses/by-nc-nd/4.0/'
    },
    //Eclipse
    {
        name: 'Eclipse Public License 1.0',
        badge: 'https://img.shields.io/badge/License-EPL_1.0-red.svg',
        link: 'https://opensource.org/licenses/EPL-1.0'
    },
    //GNU
    {
        name: 'GNU GPL v3',
        badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
        link: 'https://www.gnu.org/licenses/gpl-3.0'
    },
    {
        name: 'GNU GPL v2',
        badge: 'https://img.shields.io/badge/License-GPL_v2-blue.svg',
        link: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
    },
    {
        name: 'GNU AGPL v3',
        badge: 'https://img.shields.io/badge/License-AGPL_v3-blue.svg',
        link: 'https://www.gnu.org/licenses/agpl-3.0'
    },
    {
        name: 'GNU LGPL v3',
        badge: 'https://img.shields.io/badge/License-LGPL_v3-blue.svg',
        link: 'https://www.gnu.org/licenses/lgpl-3.0'
    },
    {
        name: 'GNU FDL v1.3',
        badge: 'https://img.shields.io/badge/License-FDL_v1.3-blue.svg',
        link: 'https://www.gnu.org/licenses/fdl-1.3'
    },
    //The Organization for Ethical Source
    {
        name: 'The Hippocratic License 2.1',
        badge: 'https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg',
        link: 'https://firstdonoharm.dev'
    },
    {
        name: 'The Hippocratic License 3.0',
        badge: 'https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg',
        link: 'https://firstdonoharm.dev'
    },
    //IBM
    {
        name: 'IBM Public License Version 1.0',
        badge: 'https://img.shields.io/badge/License-IPL_1.0-blue.svg',
        link: 'https://opensource.org/licenses/IPL-1.0'
    },
    //ISC
    {
        name: 'ISC License (ISC)',
        badge: 'https://img.shields.io/badge/License-ISC-blue.svg',
        link: 'https://opensource.org/licenses/ISC'
    },
    //MIT
    {
        name: 'The MIT License',
        badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
        link: 'https://opensource.org/licenses/MIT'
    },
    //Mozilla
    {
        name: 'Mozilla Public License 2.0',
        badge: 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
        link: 'https://opensource.org/licenses/MPL-2.0'
    },
    //Open Data Commons
    {
        name: 'Attribution License (BY)',
        badge: 'https://img.shields.io/badge/License-ODC_BY-brightgreen.svg',
        link: 'https://opendatacommons.org/licenses/by/'
    },
    {
        name: 'Open Database License (ODbL)',
        badge: 'https://img.shields.io/badge/License-ODbL-brightgreen.svg',
        link: 'https://opendatacommons.org/licenses/odbl/'
    },
    {
        name: 'Public Domain Dedication and License (PDDL)',
        badge: 'https://img.shields.io/badge/License-PDDL-brightgreen.svg',
        link: 'https://opendatacommons.org/licenses/pddl/'
    },
    //Perl
    {
        name: 'Artistic-2.0',
        badge: 'https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg',
        link: 'https://opensource.org/licenses/Artistic-2.0'
    },
    //SIL
    {
        name: 'SIL Open Font License 1.1',
        badge: 'https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg',
        link: 'https://opensource.org/licenses/OFL-1.1'
    },
    //Zlib
    {
        name: 'The zlib/libpng License',
        badge: 'https://img.shields.io/badge/License-Zlib-lightgrey.svg',
        link: 'https://opensource.org/licenses/Zlib'
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, `${data}\n`, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}


function askQuestions() {
    var listOfLicenses = [];
    for (let i = 0; i < licenseOptions.length; i++) {
        listOfLicenses.push(licenseOptions[i].name);
    }
    const questions = [
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What would you like to name your markdown file?',// name the file
                    name: 'fileName'
                },
                {
                    type: 'input',
                    message: 'What is the title of your project?',// title of my project
                    name: 'title'
                },
                {
                    type: 'input',
                    message: 'Please describe your project.',// Description
                    name: 'description'
                },
                {
                    type: 'input',
                    message: 'Please add your installation instructions.',// Installation
                    name: 'installation'
                },
                {
                    type: 'input',
                    message: 'Please describe how to use your application.',// Usage
                    name: 'usage'
                },
                {
                    type: 'input',
                    message: 'Please explain how others are meant to contribute to your project.',// Contributing
                    name: 'contribution'
                },
                {
                    type: 'input',
                    message: 'Please explain how to test your application.',// Tests
                    name: 'tests'
                },
                {
                    type: 'list',
                    message: 'Please choose from the provided list of licenses',// License
                    name: 'license',
                    choices: listOfLicenses
                },
                {
                    type: 'input',
                    message: 'What is your GitHub username?',// Questions
                    name: 'github'
                },
                {
                    type: 'input',
                    message: 'What is your email address?',// Questions
                    name: 'email'
                },
            ])
            .then((response) => {
                let chosenLicense = genMD.renderLicenseSection(listOfLicenses, response.license);
                let badge = genMD.renderLicenseBadge(licenseOptions, listOfLicenses, chosenLicense);
                let link = genMD.renderLicenseLink(licenseOptions, listOfLicenses, chosenLicense);
                let markdownText = genMD.generateMarkdown(`./dist/${response.fileName}.md`, response, chosenLicense, badge, link);
                writeToFile(`./dist/${response.fileName}.md`, markdownText);
            }
            )
    ];
}

// Function to initialize app
function init() {
    askQuestions();
}

// Function call to initialize app
init();


