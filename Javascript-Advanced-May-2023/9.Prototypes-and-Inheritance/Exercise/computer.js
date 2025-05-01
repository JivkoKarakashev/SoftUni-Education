function computer() {

    class Keyboard {

        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }

    class Monitor {

        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }

    class Battery {

        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }

    class Computer {

        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new Error('Not abstract class instance allowed!');
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        _battery;

        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(bat) {
            if (bat instanceof Battery) {
                this._battery = bat;
                return;
            }
            throw new TypeError('Not instance of Battery!');
        }
    }

    class Desktop extends Computer {
        _keyboard;
        _monitor;

        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(kBoard) {
            if (kBoard instanceof Keyboard) {
                this._keyboard = kBoard;
                return;
            }
            throw new TypeError('Not instance of Keyboard!');
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(montr) {
            if (montr instanceof Monitor) {
                this._monitor = montr;
                return;
            }
            throw new TypeError('Not instance of Monitor!');
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

let classes = computer();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;
let battery = new Battery('Energy', 3);
console.log(battery);
// Battery {
//     manufacturer: 'Energy',
//     expectedLife: 3
// }
let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
console.log(laptop);
// Laptop {
//     manufacturer: 'Hewlett Packard',
//     processorSpeed: 2.4,
//     ram: 4,
//     hardDiskSpace: 0.5,
//     weight: 3.12,
//     color: 'Silver',
//     _battery: Battery {
//         manufacturer: 'Energy',
//         expectedLife: 3
//     }
// }