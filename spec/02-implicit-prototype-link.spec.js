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
    expect(Object.getPrototypeOf(obj)).to.equal(Object.prototype);
  });

  it('has an implicit prototype link to a given object prototype', function () {
    var obj1 = {};
    var obj2 = Object.create(obj1);
    expect(Object.getPrototypeOf(obj2)).to.equal(obj1);
  });

});
