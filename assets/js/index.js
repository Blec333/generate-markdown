const inquirer = require('inquirer');
const fs = require("fs");
const readmeFile = 'generated-readme.md'
const license = {
    //Apache
    0: {
        name: 'Apache 2.0 License',
        badge: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
        link: 'https://opensource.org/licenses/Apache-2.0)'
    },
    //Boost
    1: {
        name: 'Boost Software License 1.0',
        badge: 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
        link: 'https://www.boost.org/LICENSE_1_0.txt)'
    },
    //BSD
    2: {
        name: 'BSD 3-Clause License',
        badge: 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
        link: 'https://opensource.org/licenses/BSD-3-Clause)'
    },
    3: {
        name: 'BSD 2-Clause License',
        badge: 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg',
        link: 'https://opensource.org/licenses/BSD-2-Clause)'
    },
    //Creative Commons
    4: {
        name: 'CC0-1.0',
        badge: 'https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg',
        link: 'http://creativecommons.org/publicdomain/zero/1.0/'
    },
    5: {
        name: 'Attribution 4.0 International',
        badge: 'https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg',
        link: 'https://creativecommons.org/licenses/by/4.0/)'
    },
    6: {
        name: 'Attribution-ShareAlike 4.0 International',
        badge: 'https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg',
        link: 'https://creativecommons.org/licenses/by-sa/4.0/)'
    },
    7: {
        name: 'Attribution-NonCommercial 4.0 International',
        badge: 'https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg',
        link: 'https://creativecommons.org/licenses/by-nc/4.0/)'
    },
    8: {
        name: 'Attribution-NoDerivates 4.0 International',
        badge: 'https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg',
        link: 'https://creativecommons.org/licenses/by-nd/4.0/)'
    },
    9: {
        name: 'Attribution-NonCommmercial-ShareAlike 4.0 International',
        badge: 'https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg',
        link: 'https://creativecommons.org/licenses/by-nc-sa/4.0/)'
    },
    10: {
        name: 'Attribution-NonCommercial-NoDerivatives 4.0 International',
        badge: 'https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg',
        link: 'https://creativecommons.org/licenses/by-nc-nd/4.0/)'
    },
    //Eclipse
    11: {
        name: 'Eclipse Public License 1.0',
        badge: 'https://img.shields.io/badge/License-EPL_1.0-red.svg',
        link: 'https://opensource.org/licenses/EPL-1.0)'
    },
    //GNU
    12: {
        name: 'GNU GPL v3',
        badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
        link: 'https://www.gnu.org/licenses/gpl-3.0)'
    },
    13: {
        name: 'GNU GPL v2',
        badge: 'https://img.shields.io/badge/License-GPL_v2-blue.svg',
        link: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
    },
    14: {
        name: 'GNU AGPL v3',
        badge: 'https://img.shields.io/badge/License-AGPL_v3-blue.svg',
        link: 'https://www.gnu.org/licenses/agpl-3.0)'
    },
    15: {
        name: 'GNU LGPL v3',
        badge: 'https://img.shields.io/badge/License-LGPL_v3-blue.svg',
        link: 'https://www.gnu.org/licenses/lgpl-3.0)'
    },
    16: {
        name: 'GNU FDL v1.3',
        badge: 'https://img.shields.io/badge/License-FDL_v1.3-blue.svg',
        link: 'https://www.gnu.org/licenses/fdl-1.3)'
    },
    //The Organization for Ethical Source
    17: {
        name: 'The Hippocratic License 2.1',
        badge: 'https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg',
        link: 'https://firstdonoharm.dev)'
    },
    18: {
        name: 'The Hippocratic License 3.0',
        badge: 'https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg',
        link: 'https://firstdonoharm.dev)'
    },
    //IBM
    19: {
        name: 'IBM Public License Version 1.0',
        badge: 'https://img.shields.io/badge/License-IPL_1.0-blue.svg',
        link: 'https://opensource.org/licenses/IPL-1.0'
    },
    //ISC
    20: {
        name: 'ISC License (ISC)',
        badge: 'https://img.shields.io/badge/License-ISC-blue.svg',
        link: 'https://opensource.org/licenses/ISC)'
    },
    //MIT
    21: {
        name: 'The MIT License',
        badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
        link: 'https://opensource.org/licenses/MIT)'
    },
    //Mozilla
    22: {
        name: 'Mozilla Public License 2.0',
        badge: 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
        link: 'https://opensource.org/licenses/MPL-2.0)'
    },
    //Open Data Commons
    23: {
        name: 'Attribution License (BY)',
        badge: 'https://img.shields.io/badge/License-ODC_BY-brightgreen.svg',
        link: 'https://opendatacommons.org/licenses/by/'
    },
    24: {
        name: 'Open Database License (ODbL)',
        badge: 'https://img.shields.io/badge/License-ODbL-brightgreen.svg',
        link: 'https://opendatacommons.org/licenses/odbl/'
    },
    25: {
        name: 'Public Domain Dedication and License (PDDL)',
        badge: 'https://img.shields.io/badge/License-PDDL-brightgreen.svg',
        link: 'https://opendatacommons.org/licenses/pddl/'
    },
    //Perl
    26: {
        name: 'Artistic-2.0',
        badge: 'https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg',
        link: 'https://opensource.org/licenses/Artistic-2.0'
    },
    //SIL
    27: {
        name: 'SIL Open Font License 1.1',
        badge: 'https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg',
        link: 'https://opensource.org/licenses/OFL-1.1'
    },
    //Zlib
    28: {
        name: 'The zlib/libpng License',
        badge: 'https://img.shields.io/badge/License-Zlib-lightgrey.svg',
        link: 'https://opensource.org/licenses/Zlib'
    }
}

let licenseList = [];
function genLicList() {
    for (let i = 0; i < Object.keys(license).length; i++) {
        licenseList.push(license[i].name);
    }
}
genLicList();

function writeToFile(fileName, data) {
    fs.writeFile(fileName, `${data}\n`, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

function appendToFile(fileName, data) {
    fs.appendFile(fileName, `${data}\n`, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

const questions = [
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the title of your project?',
                name: 'title'
            },
            {
                type: 'input',
                message: 'Please describe your project.',
                name: 'description'
            },
            {
                type: 'input',
                message: 'Please add your installation instructions.',
                name: 'installation'
            },
            {
                type: 'input',
                message: 'Please describe how to use your application.',
                name: 'usage'
            },
            {
                type: 'input',
                message: 'Please explain how others are meant to contribute to your project.',
                name: 'contribution'
            },
            {
                type: 'input',
                message: 'Please explain how to test your application.',
                name: 'tests'
            },
            {
                type: 'list',
                message: 'Please choose from the provided list of licenses',
                name: 'license',
                choices: licenseList
            }
        ])
        .then((response) => {
            console.log(response);
            console.log(response.title);
            console.log(response.description);
            console.log(response.installation);
            console.log(response.usage);
            console.log(response.contribution);
            console.log(response.tests);
            console.log(response.license);
            console.log(licenseList.indexOf(response.license));

            let badge = response.license[licenseList.indexOf(response.license)].badge;
            let link = response.license[licenseList.indexOf(response.license)].link;

            writeToFile(readmeFile, `# ${response.title}`);
            appendToFile(readmeFile, '\n');
            appendToFile(readmeFile, `<img title="badge" alt="badge" src="${badge}"/>`);
            appendToFile(readmeFile, '\n');
            appendToFile(readmeFile, '## Description');
            appendToFile(readmeFile, '\n');
            appendToFile(readmeFile, `${response.description}`);
            appendToFile(readmeFile, '\n');
            appendToFile(readmeFile, '## Installation');
            appendToFile(readmeFile, '\n');
            appendToFile(readmeFile, `${response.installation}`);
            appendToFile(readmeFile, '\n');
            appendToFile(readmeFile, '## Usage');
            appendToFile(readmeFile, '\n');
            appendToFile(readmeFile, `${response.usage}`);
            appendToFile(readmeFile, '\n');
            appendToFile(readmeFile, '## Contribution');
            appendToFile(readmeFile, '\n');
            appendToFile(readmeFile, `${response.contribution}`);
            appendToFile(readmeFile, '\n');
            appendToFile(readmeFile, '## Tests');
            appendToFile(readmeFile, '\n');
            appendToFile(readmeFile, `${response.tests}`);
            appendToFile(readmeFile, '\n');
            appendToFile(readmeFile, '## License');
            appendToFile(readmeFile, '\n');
            appendToFile(readmeFile, `${response.license}`);
            appendToFile(readmeFile, '\n');
            appendToFile(readmeFile, `${response.license[licenseList.indexOf(response.license)].link}`);
        }
        )
]



// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
// init();

