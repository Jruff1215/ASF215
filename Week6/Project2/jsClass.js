//Create a class with functions

module.exports = class JavaScriptClass {

    constructor(){
        this.newArray = []

    }
    addItem(items){
    //Add an item of any data type to the array.
        this.newArray.push(items)
        return this.newArray
    }
    removeItem(){
    //Removes specific items from the array
        const index = this.newArray.indexOf(3)
        if (index > -1) {
            this.newArray.splice(index, 2)
        }
        return this.newArray
    }
    searchItem(item){
      var letters = this.newArray.filter(function(letter) {
        return letter === item
      })  
      if(letters.length > 0) {
        return true
      } else {
        throw TypeError('This item is not found.') 
      }
    }
}