module.exports = class Message{
constructor(num1){
    this.num1 = num1
}

Greet(){
    if (this.num1%3 == 0 && this.num1%7 == 0){
        return "Good Evening"
    } else if (this.num1%7 ==0 ) {
        return "Good Afternoon"
    } else if (this.num1%3 == 0) {
        return "Good Morning"
    } else { 
        if(typeof this.num1 == "number"){
            return this.num1.toString()
        } else {
        return "Error!!!"
        }
    }
}
}