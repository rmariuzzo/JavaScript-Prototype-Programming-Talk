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

  it('can have static properties', function() {
    var obj1 = {};
    var obj2 = Object.create(obj1);
    var obj3 = Object.create(obj1);

    // Adding a property to a prototype object will make all descendant object
    // to have access to it.
    obj1.prop1 = 'foo';
    expect(obj2).to.have.property('prop1');
    expect(obj2).to.not.have.ownProperty('prop1');
    expect(obj3).to.have.property('prop1');
    expect(obj3).to.not.have.ownProperty('prop1');

    // Changing the value of the static property directly in the prototype
    // will make all descendant have a the same value.
    var newValue = 'bar';
    obj1.prop1 = newValue;
    expect(obj2).to.have.property('prop1', newValue);
    expect(obj3).to.have.property('prop1', newValue);

    // Trying to change the value of the static property in a descendant object,
    // not the prototype, will result in shadowing, creating a new instance
    // property with a new value. So far we can conclude that instance properties
    // have higher priority in the prototype chain than static properties.
    newValue = 'xyz';
    obj2.prop1 = newValue;
    expect(obj2).to.have.property('prop1', newValue);
    expect(obj1).to.not.have.property('prop1', newValue);
    expect(obj3).to.not.have.property('prop1', newValue);
  });

});
