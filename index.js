const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./generate_markdown');

inquirer
    .prompt([
        {
            type:'input',
            message:'What is your Github username?',
            name:'username',
        },
        {
            type:'input',
            message:'What is your email address?',
            name:'email_address',
        },
        {
            type:'input',
            message:'What is the projects name',
            name:'projectName',
        },
        {
            type:'list',
            message:'Whas kind of license should your project have',
            name:'license',
            choices: ['MIT', 'APACHE 2.0','GPL 3.0','BSD 3','None'],
        },
        {
            type:'input',
            message:'Please write a short discription of the project?',
            name:'discription',
        },
        {
            type:'input',
            message:'Whas command should be run to install dependencies',
            name:'command',
        },
        {
            type:'input',
            message:'Whas command should be run to run tests',
            name:'runTestCommand',
        },
        {
            type:'input',
            message:'Whas does the user need to know about using the repo',
            name:'infoAboutRepo',
        },
        {
            type:'input',
            message:'Whas does the user need to know about contributing to the the repo',
            name:'infoAboutContributing',
        },




    ])


    .then((data) => {
        let allData = markdown.generateReadme(data);
        fs.writeFile('README.md', allData, function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
       
      });
    