class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}


class ColoRedWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}

const div = new ColoRedWithText(30, 20, 'Hi pidor', 'purple');

div.showMyProps();
console.log(div.calcArea());

// const square = new Rectangle(12,12);
// console.log(square.calcArea());







