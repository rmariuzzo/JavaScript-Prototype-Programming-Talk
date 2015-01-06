/**
 * JavaScript Prototype Programming Talk.
 * https://github.com/rmariuzzo/JavaScript-Prototype-Programming-Talk
 *
 * Testing implicit prototype link.
 *
 * @author Rubens Mariuzzo
 */
'use strict';

/* globals chai */
var expect = chai.expect;

describe('Any objects', function () {

  it('has an implicit prototype link to Object.prototype', function () {
    var obj = {};
    var proto = Object.getPrototypeOf(obj);
    expect(proto).to.equal(Object.prototype);
  });

  it('has an implicit prototype link to a given object prototype', function () {
    var obj1 = {};
    var obj2 = Object.create(obj1);
    var proto = Object.getPrototypeOf(obj2);
    expect(proto).to.equal(obj1);
  });

  it('has an implicit prototype link to a an object', function () {
    var objs = [Array, String, Date, Function, Number];
    for (var key in objs) {
      var obj = objs[key];
      var proto = Object.getPrototypeOf(obj);
      expect(proto).to.not.be.a('undefined');
    }
  });

});
