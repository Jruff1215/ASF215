module.exports = class User{
constructor(num1, num2, name, age){
    this.num1 = num1
    this.num2 = num2
    this.name = name
    this.age = age
    }
    addition(){
        return this.num1 + this.num2
    }
    subtraction(){
        return this.num1 - this.num2
    }
    multiplication(){
        return this.num1 * this.num2
    }
    division(){
        return this.num1 / this.num2
    }
    greeting(){
        return `Hello ${this.name} age ${this.age}.`
    }
    stringNum(){
        return this.num1 + "" + this.num2 
    }
}
class User{

}