var chai = require('chai');
var expect = chai.expect;

var Recursion = require('./recursion');

describe('handshakes', ()=>{
    it('should return 10 hanshakes for 5 people', ()=>{
        var recursion = new Recursion();

        expect(recursion.handshake(5)).to.equal(10);
    })
})

describe('pizza', ()=>{
    it('should return 8 for 4 slices of pizza', ()=>{
        var recursion = new Recursion();

        expect(recursion.pizza(4)).to.equal(8);
    })
})