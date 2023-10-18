class Triangle {

    constructor(color) {
      this.color = color;
    }
  
    render(text, textColor) {
        // Points for an equilateral triangle
        const points = '150,18 244,182 56,182';
        
        const createTriangle = `<svg width="300" height="200">
          <polygon points="${points}" fill="${this.color}" />
          <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
          </svg>`;
        return createTriangle;
      }
    
  }
  
  module.exports = Triangle;