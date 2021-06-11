function generateLicense(license){
    if(license === 'MIT'){
         return "(https://img.shields.io/badge/License-MIT-yellow.svg)"
    }
    else if(license === 'APACHE 2.0'){
        return "(https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
    }

    else if(license === 'GPL 3.0'){
        return "(https://img.shields.io/badge/License-GPLv3-blue.svg)"
    }
    else if(license === 'BSD 3'){
        return "(https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)"
    }
    else{
        return "none";
    }
}
function generateReadme(response){
return `#${response.projectName}

# devops

![Github-liscense]
    ${generateLicense(response.license)}

## Description

    ${response.discription}


## Table of Contents
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [License](#License)
    - [Contributing](#Contributing)
    - [Tests](#tests)
    - [Questions](#questions) 

## Installation

    ${response.command}

## Usage

    ${response.infoAboutRepo}

## License
​
    This project is licensed under the ${response.license} license.

## Contributing
    ${response.infoAboutContributing}

## Tests
    ${response.runTestCommand}


## Questions
    If you have any questions about the repo open an issue or contact me directly at ${response.email_address} 
    you can find more info of my work at (https://github.com/${response.username})
`
}
module.exports = {
    generateReadme,
}