const expect = require('chai').expect
const ToDoList = require('./ToDoList')

beforeEach(() => {
    instance = new ToDoList()
    instance.addItem(123)
    instance.addItem('abc')
    instance.addItem(456)
    instance.addItem('def')

})

//Call the list
it('Call the list', () => {
    expect(true).to.deep.equal(true)
    new ToDoList()
})

//Add item to the list
it('Add item to list', () => {
    // var instance = new ToDoList()
    // instance.addItem(123)
    // instance.addItem('abc')
    // instance.addItem(456)
    // instance.addItem('def')
    expect(instance.addItem(789)).to.deep.equal([123, 'abc', 456, 'def', 789])
})

//Add multiple items to the list
it('Add multiple items to list', () => {
    // var instance = new ToDoList()
    // instance.addItem(123)
    // instance.addItem('abc')
    // instance.addItem(456)
    // instance.addItem('def')
    expect(instance.addMultiple(789, 'ghi')).to.deep.equal([123, 'abc', 456, 'def', 789, 'ghi'])
})

//Remove first item from the list
it('Remove the first item', () => {
    // var instance = new ToDoList()
    // instance.addItem(123)
    // instance.addItem('abc')
    // instance.addItem(456)
    // instance.addItem('def')
    expect(instance.removeFirst(123)).to.deep.equal(['abc', 456, 'def'])
})

//Remove last item from the list
it('Remove the last item', () => {
    // var instance = new ToDoList()
    // instance.addItem(123)
    // instance.addItem('abc')
    // instance.addItem(456)
    // instance.addItem('def')
    expect(instance.removeLast('def')).to.deep.equal([123, 'abc', 456])
})

//Remove a specific item from the list
it('Remove specific item', () => {
    // var instance = new ToDoList()
    // instance.addItem(123)
    // instance.addItem('abc')
    // instance.addItem(456)
    // instance.addItem('def')
    expect(instance.removeSpecific('abc')).to.deep.equal([123, 456, 'def'])
})