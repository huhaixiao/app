/**
 * @author Haixiao
 * @class
 * @classdesc This is a description of the class
 * @see https://www.shouce.ren/api/view/a/13232
 * @todo finish jsdoc
 */
export function AbstractClass() {}

/**
 * @abstract
 * @access public
 * @access protected
 * @access private
 * @deprecated since version 2.0
 * @description This a description
 * @example
 * var ac = new AbstractClass
 * ac.foo
 * @returns {Number} This is return description
 */
AbstractClass.prototype.foo = function () {
  throw new Error('Must be implemented by SubClass');
};

/**
 * @readonly
 */
AbstractClass.prototype.CONFIG = {};
