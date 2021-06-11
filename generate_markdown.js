function generateReadme(response){
    return `#${response.projectName}
    
            ## Description

                ${response.discription}
    
    
    
    
    ` 
}

module.exports = {
    generateReadme,
}