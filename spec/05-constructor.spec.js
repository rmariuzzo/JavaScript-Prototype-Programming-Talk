/**
 * JavaScript Prototype Programming Talk.
 * https://github.com/rmariuzzo/JavaScript-Prototype-Programming-Talk
 *
 * Testing `constructor` property.
 *
 * @author Rubens Mariuzzo
 */
'use strict';

/* globals chai */
var expect = chai.expect;

describe('Objects', function () {

  it('can have a `constructor` property', function () {
    // An object created with a "constructor function" receives via delegation
    // a prototype property named `constructor` which points to the Function.
    var Thing = function () {};
    var obj1 = new Thing();
    expect(obj1).to.have.property('constructor', Thing);

    // However, an object created with `Object.create` receives via delegation
    // a prototype property named `constructor` pointing to Object. This happen
    // because `obj3` neither `obj2` has a `constructor` property. The prototype
    // chain point `Object.prototype.constructor` which point to `Object`.
    var obj2 = {};
    var obj3 = Object.create(obj2);
    expect(obj3).to.have.property('constructor', Object);

    // The exactly same behavior happen if we replace the explicit `prototype`
    // property with an object. Because, the prototype chain will be affected.
    Thing.prototype = {};
    var obj4 = new Thing();
    expect(obj4).to.have.property('constructor', Object);
  });

});
