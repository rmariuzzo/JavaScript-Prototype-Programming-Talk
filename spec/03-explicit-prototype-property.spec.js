/**
 * JavaScript Prototype Programming Talk.
 * https://github.com/rmariuzzo/JavaScript-Prototype-Programming-Talk
 *
 * Using explicit prototype property to make prototype link.
 *
 * @author Rubens Mariuzzo
 */
'use strict';

/* globals chai */
var expect = chai.expect;

describe('Objects', function () {

  it('can not use a "normal" `prototype` property to make a prototype link', function () {
    var obj = {};
    obj.prototype = {};
    obj.prototype.foo = 'bar';
    expect(obj).to.not.have.property('foo');
  });

  it('can use a `prototype` property via "constructor invocation pattern" to make a prototype link', function () {
    var Thing = function () {};
    Thing.prototype.foo = 'bar';
    var obj = new Thing();
    expect(obj).to.have.property('foo');
    expect(obj.foo).to.equal(Thing.prototype.foo);
    // Because `Thing` doesn't have prototype link to its `prototype` property.
    expect(Thing).to.not.have.property('foo');
  });

});
