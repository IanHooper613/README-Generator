function generateMarkdown (data, profileImg) {
    return `
  # ${data.title}
  ![GitHub followers](https://img.shields.io/github/followers/ianhooper613?label=Follow&style=social)

  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#test)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  If there are any questions, feel free to reach out to me at https://github.com/${data.username} \n
  ![Profile Image](${profileImg})
  ## Licenses
  Currently there are no licenses for this application.
  `;
  }
  
  module.exports = generateMarkdown
  