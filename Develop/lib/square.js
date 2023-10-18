class Square {

    constructor(color) {
        this.color = color;
    }

    render(text, textColor) {
        const createSquare = `<svg width="300" height="200">
        <rect x="90" y="40" width="120" height="120" fill="${this.color}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`;
        return createSquare;
    }
}

module.exports = Square;