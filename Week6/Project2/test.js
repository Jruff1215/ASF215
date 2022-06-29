const expect = require('chai').expect
const assert = require('chai').assert
const e = require('express')
const JavaScriptClass = require('./jsClass')

beforeEach(function () {
    instance = new JavaScriptClass()
    instance.addItem('abc')
    instance.addItem('def')
    instance.addItem('ghi')
})

afterEach(function () {
    console.log('This test is Over')
})

before(() => {console.log('------Test Starts------')})

after(() => {console.log('------Test is Complete------')})

it('expect passing test', function() {
    expect(true).to.equal(true)
})

//Add Item to array
it('Adds an item of any data type to the array', () => {
    // var instance = new JavaScriptClass()
    // instance.addItem('abc')
    // instance.addItem('def')
    // instance.addItem('ghi')

    expect(instance.addItem(123)).to.deep.equal(['abc', 'def', 'ghi', 123])
})

//Call the Array
it('Call the Array', function() {
    expect(true).to.deep.equal(true)
    new JavaScriptClass()
})

//Remove specific items from the Array
it('Removes specific items from the array', function() {
    // var instance = new JavaScriptClass()
    // instance.addItem('abc')
    // instance.addItem('def')
    // instance.addItem('ghi')
    expect(instance.removeItem('ghi' )).to.deep.equal(['abc', 'def', 'ghi'])
})

// Search the array for specific items
it('Search the array for a specific item', function () {
    // var instance = new JavaScriptClass()
    // instance.addItem('abc')
    // instance.addItem('def')
    // instance.addItem('ghi')
    expect(instance.searchItem('def')).to.deep.equal(true)
})

//Search didn't find item
it('Search item not found', function () {
    // var instance = new JavaScriptClass()
    // instance.addItem('abc')
    // instance.addItem('def')
    // instance.addItem('ghi')
    expect(() => instance.searchItem('jkl')).to.throw('This')
})