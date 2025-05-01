function classHierarchy() {

    class Figure {

        constructor() {
            this.units = 'cm';
        }

        get area() {

        }

        changeUnits(units) {
            this.units = units;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {

        constructor(radius) {
            super();
            this.radius = radius;
        }

        get area() {
            super.area;
            switch (this.units) {
                case 'm': return Math.PI * Math.pow(this.radius / 100, 2);
                case 'mm': return Math.PI * Math.pow(this.radius * 10, 2);
                default: return Math.PI * Math.pow(this.radius, 2);
            }
        }

        toString() {
            super.toString();
            switch (this.units) {
                case 'm': return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius / 100}`;
                case 'mm': return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius * 10}`;
                default: return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
            }
        }
    }

    class Rectangle extends Figure {

        constructor(width, height, units) {
            super(units)
            this.width = width;
            this.height = height;
            this.units = units;
        }

        get area() {
            super.area;
            switch (this.units) {
                case 'm': return (this.width * this.height) / 100;
                case 'mm': return (this.width * this.height) * 100;
                default: return this.width * this.height;
            }

        }

        toString() {
            super.toString();
            switch (this.units) {
                case 'm': return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width / 100}, height: ${this.height / 100}`;
                case 'mm': return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width * 10}, height: ${this.height * 10}`;
                default: return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
            }
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }

}

const figures = classHierarchy();

let c = new figures.Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5
console.log('<--------------------------------------------------------->');
let r = new figures.Rectangle(3, 4, 'mm');
console.log(r.area);// 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40
console.log('<--------------------------------------------------------->');
r.changeUnits('cm');
console.log(r.area); // 12 
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4 
console.log('<--------------------------------------------------------->');
c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50