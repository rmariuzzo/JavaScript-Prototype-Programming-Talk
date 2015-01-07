/**
 * JavaScript Prototype Programming Talk.
 * https://github.com/rmariuzzo/JavaScript-Prototype-Programming-Talk
 *
 * Testing static and instance properties.
 *
 * @author Rubens Mariuzzo
 */
'use strict';

/* globals chai */
var expect = chai.expect;

describe('Objects', function () {

  it('can have instance property', function () {
    // Simplest form (without prototype).
    var obj1 = {};
    obj1.prop1 = 'foo';
    expect(obj1).to.have.ownProperty('prop1');

    // Using `Object.create` (with prototype).
    var obj2 = Object.create(obj1);
    obj2.prop2 = 'bar';
    expect(obj2).to.not.have.ownProperty('prop1');
    expect(obj2).to.have.ownProperty('prop2');

    // Using "constructor invocation pattern" (with prototype).
    var Thing = function () {
      this.prop3 = 'baz';
    };
    Thing.prototype = obj2;
    var obj3 = new Thing();
    expect(obj3).to.not.have.ownProperty('prop2');
    expect(obj3).to.have.ownProperty('prop3');
  });

});
