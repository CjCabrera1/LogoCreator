const { Triangle } = require('./shapes');
class SVG {
    constructor() {
      this.text = '';
      this.textColor = '';
      this.shape = null;
    }
  
    setText(text, textColor) {
      if (text.length > 3) {
        throw new Error('Text must not exceed 3 characters.');
      }
  
      this.text = text;
      this.textColor = textColor;
    }
  
    setShape(shape) {
      this.shape = shape;
    }
  
    render() {
        let shapeSvg = this.shape ? this.shape.render() : '';
        let textY = this.shape instanceof Triangle ? 150 : 125;
        let textSvg = this.text ? `<text x="150" y="${textY}" font-size="60" text-anchor="middle" fill="${this.textColor || 'black'}">${this.text}</text>` : '';
      
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeSvg}${textSvg}</svg>`.trim();
      }
  }
  
  module.exports = SVG;