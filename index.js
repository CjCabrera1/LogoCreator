const fs = require('fs');
const inquirer = require('inquirer');
const Circle = require('./Develop/lib/circle');  // Import the Circle class
const Triangle = require('./Develop/lib/triangle');  // Import the triangle class
const Square = require('./Develop/lib/square');  // Import the square class

// user input goes here
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter up to three characters: ',
      name: 'text',
    },
    {
      type: 'input',
      message: 'Enter desired text color OR a hexadecimal number: ',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'Select desired shape: ',
      choices: ['Circle', 'Triangle', 'Square'],
      name: 'shape',
    },
    {
      type: 'input',
      message: 'Enter desired shape color: ',
      name: 'shapeColor',
    },
  ])

  .then((answers) => {
    let shape;
    // handle shape classes here
    switch (answers.shape.toLowerCase()) {
    case 'circle':
        shape = new Circle(answers.shapeColor); 
        break;

    case 'square':
        shape = new Square(answers.shapeColor);  
        break;

    case 'triangle':
        shape = new Triangle(answers.shapeColor);  
        break;

    default:
    console.log('Invalid shape choice.');
        return;
    }

    const svgLogo = shape.render(answers.text, answers.textColor);
    fs.writeFileSync('logo.svg', svgLogo);
    console.log('Generated logo.svg');
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });