// First I am going to create the foudation of the class
// First you need to install Live server extension in order to see the result of your action
class Car {
    constructor(doors, engine, color) {
        // below are properties of the Car
        this.doors = doors
        this.engine = engine
        this.color = color
    }
    carStats() {
        return `This car has ${this.doors} doors, a ${this.engine} 
        ,and a beautigul ${this.color} Color`
    }

}

let show = true
const cx5 = new Car(4, 'V6', 'Black')
const para = document.querySelector('.para')
const btn = document.querySelector('button')


btn.addEventListener('click', e => {
    para.textContent = show ? cx5.carStats() : ""
    // bellow we set a locker in order to to switch te text
    setTimeout(() => {
        if (show) {
            show = false
        } else {
            show = true
        }
    }, 1)
})
