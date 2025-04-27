function classLaptop() {

    class Laptop {
        constructor(objInfo, qlty) {
            this.info = objInfo;
            this._quality = qlty;
            this.isOn = false;
        }
        turnOn = () => {
            this.isOn = true;
            this.quality--;
        }
        turnOff = () => {
            this.isOn = false;
            this.quality--;
        }
        showInfo = () => {
            for (const key in this.info) {
                return JSON.stringify(this.info);
            }
        }
        set quality(qlty) {
            this._quality = qlty;
        }
        get quality() {
            return this._quality;
        }
        get price() {
            return (800 - (Number(this.info.age) * 2) + (this.quality * 0.5));
        }
    }
    
    // let info = { producer: "Dell", age: 2, brand: "XPS" }
    // let laptop = new Laptop(info, 10)
    // laptop.turnOn()
    // console.log(laptop.showInfo())
    // laptop.turnOff()
    // console.log(laptop.quality)
    // laptop.turnOn()
    // console.log(laptop.isOn)
    // console.log(laptop.price)

    let info = { producer: "Lenovo", age: 1, brand: "Legion" }
    let laptop = new Laptop(info, 10)
    laptop.turnOn()
    console.log(laptop.showInfo())
    laptop.turnOff()
    laptop.turnOn()
    laptop.turnOff()
    console.log(laptop.isOn)

}

classLaptop()