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

describe('Creating objects from objects', function () {

  it('create object from nothing', function () {
    var obj = {};
    expect(obj).to.be.a('object');
  });

  it('create object from another', function () {
    var a = {};
    var b = Object.create(a);
    expect(b).to.be.a('object');
  });

});
