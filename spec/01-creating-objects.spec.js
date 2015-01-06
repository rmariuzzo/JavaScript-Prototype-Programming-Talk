/**
 * JavaScript Prototype Programming Talk.
 * https://github.com/rmariuzzo/JavaScript-Prototype-Programming-Talk
 *
 * Creating objects from objects.
 *
 * @author Rubens Mariuzzo
 */
'use strict';

/* globals chai */
var expect = chai.expect;

describe('Object', function () {

  it('can be created from nothing', function () {
    var obj = {};
    expect(obj).to.be.a('object');
  });

  it('can be created from another object', function () {
    var obj1 = {};
    var obj2 = Object.create(obj1);
    expect(obj2).to.be.a('object');
  });

});
