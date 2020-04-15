const fs = require('fs')
const inquirer = require('inquirer')

const util = require('util')

const api = require('./utils/api.js')
const generateMarkdown = require('./utils/generateMarkdown.js')

const writeFileP = util.promisify(fs.writeFile)


function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please give a brief description of your application'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Are there any installation steps needed?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are the instructions to use the application?'
        },
        {
            type: 'input',
            name: 'license',
            message: 'Is there a license for the application?'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who/what were the contributors for this project?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What tests were carried out for the application?'
        }
    ])
}
async function init() {
    try{
        let profileImg;
        const answers = await promptUser();
        await api.getUser(answers.username).then(url => profileImg = url);
        await writeFileP('README.md', generateMarkdown(answers, profileImg));
    }catch(error) {
        console.log(error)
    }
}
init();