import inquirer from 'inquirer';

inquirer
  .prompt([
    const prompt = inquirer.createPromptModule();

    prompt(questions).then(type="input",);
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });