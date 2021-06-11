function generateReadme(response){
    return `#${response.projectName}
    
            ## Description

                ${response.discription}
    
    
            ## Table of Contents
                - [Installation](#installation)
                - [Usage](#usage)
                - [Credits](#credits)
                - [License](#license)

            ## Installation

                ${response.command}

            ## Usage

                ${response.infoAboutRepo}

            ## Contributing
                ${response.infoAboutContributing}

            ## Tests
                ${response.runTestCommand}
    ` 
}

module.exports = {
    generateReadme,
}