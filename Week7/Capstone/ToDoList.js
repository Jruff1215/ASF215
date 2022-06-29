//Create a Todo list
module.exports = class ToDoList {
    constructor() {
        this.newList = []
    }
    addItem(items){
    //adds an item to the list
        this.newList.push(items)
        return this.newList
    }
    addMultiple(items1, items2){
    //adds multiple items to the list
        this.newList.push(items1)
        this.newList.push(items2)
        return this.newList
    }
    removeFirst(item){
    //removes the first item from list
        this.newList.shift(item)
        return this.newList
    }
    removeLast(item){
    //removes the last item from list
        this.newList.pop(item)
        return this.newList
    }
    removeSpecific(){
    //removes specific item from list
        // const index = this.newList.indexOf(3)
        // if(index > -1) {
            this.newList.splice(1, 1)
            return this.newList

    }
}
// }