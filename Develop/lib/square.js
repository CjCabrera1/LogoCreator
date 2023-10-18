class Circle {
    constructor(color) {
      this.color = color;
    }
  
    render(text, textColor) {
      // Logic to generate SVG for a circle with the provided parameters
      const svgString = `<svg width="300" height="200">
        <circle cx="150" cy="100" r="50" fill="${this.color}" />
        <text x="50%" y="50%" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>`;
      return svgString;
    }
  }
  
  module.exports = Circle;