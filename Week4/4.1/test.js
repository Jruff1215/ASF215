const expect = require('chai').expect
const assert = require('chai').assert
const Math = require('./calculator')

it('Call calculator', function() {
    // expect(true).to.equal(true)
    // new Math()
    expect(() => new Math()).to.throw()

    })
it('Addition', function() {
    var calc = new Math(1,5)
    expect(calc.add()).to.equal(6)
})
it('Subtraction', function() {
    var calc = new Math (10, 5)
    expect(calc.subtract()).to.equal(5)
})
it('Multiplication', function() {
    var calc = new Math (3, 7)
    expect(calc.multiply()).to.equal(21)
})
it('Division', function() {
    var calc = new Math (49, 7)
    expect(calc.divide()).to.equal(7)
})
it('Error', function() {
    // new Math ("B", "S")
    expect(() => new Math("B")).to.throw("Not")
})