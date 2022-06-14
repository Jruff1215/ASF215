module.exports = class Math {
    constructor(num1, num2) {
        if (typeof num1 !== "number" || typeof num2 !== "number"){
            throw TypeError("Not a Number!")

        } else {
        this.num1 = num1
        this.num2 = num2}
    }

    add(){
        return this.num1 + this.num2
    }
    subtract(){
        return this.num1 - this.num2
    }
    multiply(){
        return this.num1 * this.num2
    }
    divide(){
        return this.num1 / this.num2
    }
}