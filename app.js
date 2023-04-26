class Car {
    constructor(doors, engine, color) {
        this.doors = doors
        this.engine = engine
        this.color = color
    }

    show(newCar) {
        for (let key in newCar) {
            console.log(`${key}:${newCar[key]}`)
        }
    }
}

const newCar = new Car(4, 'V6', 'Gray')

newCar.show(newCar)
// bellow we show how to make use of object literal
// we have created another instance of Class


