// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Created a function to write README file
function createFile({ projectTitle, description, installation, usage, contribution, license, badge, tests, questions, github, email}) {
    return `

    # ${projectTitle}
    ${badge}

    ## Description
    ${description}
    
    ## Table of Contents
    - [Description](#descrition)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contribution](#contriubtion)
    - [Tests](#tests)
    - [Questions](#questions)
    - [Contact Info](#contact)
    
    ## Installation
    ${installation}
    
    ## Usage
    ${usage}
    
    ## License
    ${license}
    
    ## Contribution
    ${contribution}
    
    ## Tests
    ${tests}
    
    ## Questions
    ${questions}
    
    ## Contact Info
    Email ${email}
    [Github](https://github.com/${github})
    `
}

let licenseBadge = [
    {
        license: "Apache 2.0",
        badge: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    },
    {
        license: "Boost Software License 1.0",
        badge: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    },
    {
        license: "Creative Commons (CC0)",
        badge: "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
    },
    {
        license: "ISC",
        badge: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    },
    {
        license: "MIT",
        badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    }
]
// Created a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the project title?",
            name: 'projectTitle'
        },
        {
            type: 'input',
            message: "Write a description of your project ",
            name: 'description'
        },
        {
            type:'input',
            message: "Describe the installation process",
            name: 'installation'
        },
        {
            type: 'input',
            message: "What is the project usage for?",
            name: 'usage'
        },
        {
            type: 'input',
            message: "Who, if any, are the contributors of this project?",
            name: 'contriubtion'
        },
        {
            type: 'list',
            message: "Choose what license you are using.",
            name: 'license',
            choices: [
                'Apache 2.0',
                'Boost Software License 1.0',
                'Creative Commons (CC0)',
                'ISC',
                'MIT'
            ]
        },
        {
            type: 'input',
            message: "Are there any tests included?",
            name: 'tests'
        },
        {
            type: 'input',
            message: "Ask any questions needed:",
            name: 'questions'
        },
        {
            type: 'input',
            message: "What is your Github username?",
            name: 'github'
        },
        {
            type: 'input',
            message: "What is your email?",
            name: 'email'
        }
    ])
// Enters answers into the readme 
    .then((answers) => {
        const fileContents = createFile({...answers});
        writeToFile('generateREADME.md', fileContents);
    })
}
// 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
           return console.log(err);
        } else {
            console.log('Perfect! README created successfully!');
        }
    });
}

// Function call to initialize app
init();
