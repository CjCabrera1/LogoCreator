const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./Develop/lib/shapes');
const SVG = require("./Develop/lib/svg");

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
  // handle logo creation
  .then((answers) => {
    let shape;
    switch (answers.shape.toLowerCase()) {
      case 'circle':
        shape = new shapes.Circle(answers.shapeColor);
        break;

      case 'square':
        shape = new shapes.Square(answers.shapeColor);
        break;

      case 'triangle':
        shape = new shapes.Triangle(answers.shapeColor);
        break;

      default:
        console.log('Invalid shape choice.');
        return;
    }
    shape.setColor(answers.shapeColor);
    // Handle text in shape
    let svg = new SVG();

    // Set the text and text color
    svg.setText(answers.text, answers.textColor);
    // Set the shape
    svg.setShape(shape);
    // Generate the SVG logo
    const svgLogo = svg.render();
    // Write the SVG logo to a file
    fs.writeFileSync('logo.svg', svgLogo);

    console.log('Generated logo.svg');
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });