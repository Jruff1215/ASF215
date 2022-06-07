const User = require("./User")

const instance1 = new User(1, 2, "John", "21")

const instance2 = new User(12, 5, "Ashley", "15")

console.log(instance1.addition())
console.log(instance1.subtraction())
console.log(instance1.multiplication())
console.log(instance1.division())
console.log(instance1.greeting())
console.log(instance1.stringNum())

console.log(instance2.addition())
console.log(instance2.subtraction())
console.log(instance2.multiplication())
console.log(instance2.division())
console.log(instance2.greeting())
console.log(instance2.stringNum())
