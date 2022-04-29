# Common text title

Repository Name: generate-markdown
<img title="badge" alt="badge" src="https://img.shields.io/badge/License-MIT-yellow.svg"/>

## Description 

This project constructs a readme.md file by writing user input from the terminal to a newly created document.  Any subsequent use will overwrite the current document. 

* User input code:
```md
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What would you like to name your readme file?',// name the file
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
```

## Technologies

Technologies used on this project include:
* Javascript
* Node.JS
* NPM Inquirer & FS (with module exports)


## Table of Contents (Optional)

* [Installation](#installation)
* [Usage](#usage)
* [Final Product](#final-product)
* [Video](#video)
* [License](#license)
* [Acknowledgements](#acknowledgements)

## Installation

1. Must have Node.js installed and running.
2. Please npm install inquirer and fs.

## Usage 

To begin using this site after insstall requirements:

1. Simply type 'node index.js' into the terminal.
2. Answer the questions that you are prompted with.
3. Check to see that your file was generated in the same directory.

## Final Product

<img title="image" alt="Style Showcase Page Screenshot" src="./docs/image1.jpg">



Github Repository
https://github.com/Blec333/generate-markdown


## Video

[![Video](./docs/performance.gif)](https://drive.google.com/open?id=1OGaiWqBbhk-_bFVIQACtF5USzJLQLeS9&authuser=bleclair3%40gmail.com&usp=drive_fs "Video")

https://drive.google.com/open?id=1OGaiWqBbhk-_bFVIQACtF5USzJLQLeS9&authuser=bleclair3%40gmail.com&usp=drive_fs

### License

MIT License

Copyright (c) 2022 Brennan LeClair

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


### Acknowledgements

©Brennan LeClair

