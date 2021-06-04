//procedural programming
const salary = 30
const overtime = 40
const rate = 20

function getWage (salary, overtime, rate){
    return salary * (overtime*rate)
}
//console.log(getWage)
//console.log("info")
//OOP programming 
//encapsulation
let employee = {
    salary: 30,
    overtime: 40,
    rate: 20,
    getWage: function(){
        const value = this.salary * (this.overtime * this.rate)
        console.log(value)
        return value
    }
};
employee.getWage()
//console.log(employee.getWage())
//inheritance
//polymorphism

//OOP
//creating objects
let circle = {
    radius: 1,
    location: {
        x: 1,
        y:1
    },
    draw: function(){
        console.log("draw")
    }
}
circle.draw()
//factories and constructors
//factory function
function createSquare(radius){
    return {
        radius,
        draw: function (){
            console.log("square")
        }
    }
}
const square = createSquare(1)
console.log(square.draw)
//construction function
function Triangle(radius){
    console.log("this", this)
    this.radius = radius
    this.draw = function(){
        console.log("draw")
    }
}
const another = new Triangle

//objects primitives and reference types
//let x = {}
//let x = new Object{}
//new String()= "", '',``
//new Boolean()= false true
//new Number()= 1,2,3
//functions are objects
//methods and propertys
//Triangle.call({}, 1) 
//Triangle.apply({}, [1,2,3,4])
//values vs reference types
//values: Number, String, Boolean, Symbol, Undefined, Null
//Reference Types: Object, Function, Array
let obj = {value: 10}
let plus = 10
function increment (obj){
    return obj.value++
}
increment(obj)
console.log(obj)
//Abstraction
