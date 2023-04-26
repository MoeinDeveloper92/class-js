class Car {
    constructor(doors, engine, color) {
        this.doors = doors
        this.engine = engine
        this.color = color
    }
}

const newCar = new Car(4, 'V6', 'Gray')
// bellow we show how to make use of object literal
for (let key in newCar) {
    console.log(`${key}:${newCar[key]}`)
}

