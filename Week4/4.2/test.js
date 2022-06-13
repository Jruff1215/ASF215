const expect = require('chai').expect
const assert = require('chai').assert
const Message = require('./class')

it('expect passing test', function() {
    expect(true).to.equal(true)
    })

it('returns "1" when passed "1"', function() {
    var instance = new Message(1)
    expect(instance.Greet()).to.equal("1")
    })

it('returns "2" when passed "2"', function() {
    var instance = new Message(2)
    expect(instance.Greet()).to.equal("2")
})

it('returns "Good Morning" when passed "3"', function() {
    var instance = new Message(3)
    expect(instance.Greet()).to.equal("Good Morning")
})

it('returns "Good Afternoon" when passed "7"', function(){
    var instance = new Message(7)
    expect(instance.Greet()).to.equal("Good Afternoon")
})

it('returns "Good Morning" when passed "3" or multiple thereof', function(){
    var instance = new Message(9)
    expect(instance.Greet()).to.equal("Good Morning")
})

it('returns "Good Afternoon" when passed "7" or multiple therof', function() {
    var instance = new Message(49)
    expect(instance.Greet()).to.equal("Good Afternoon")
})

it('returns "Good Evening" when passed a multiple of "3" and "7"', function() {
    var instance = new Message(21)
    expect(instance.Greet()).to.equal("Good Evening")
})

it('returns a string when number is not a multiple of "3" or "7"', function() {
    var instance = new Message(50)
    expect(instance.Greet()).to.equal("50")
})

it('returns error when any other data type is entered', function() {
    var instance = new Message("50")
    expect(instance.Greet()).to.equal("Error!!!")
})