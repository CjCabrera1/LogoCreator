class Circle {
    constructor(color) {
      this.color = color;
    }
  
    render(text, textColor) {
      // Logic to generate SVG for a circle with the provided parameters
      const createCircle = `<svg width="300" height="200">
      <circle cx="150" cy="100" r="80" fill="${this.color}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;
      return createCircle;
    }
  }
  
  module.exports = Circle;