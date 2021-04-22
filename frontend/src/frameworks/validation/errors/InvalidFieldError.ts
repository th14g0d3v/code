/**
 * @class InvalidFieldError This error is called when a field validation fails
 * @extends Error Create an error object. Instances of Error objects are launched when runtime errors occur.
 * @constructor A class method
 * @method super A method taht refers to the parent class 
 */
export class InvalidFieldError extends Error {
  constructor () {
    super('Invalid Value')
  }
}
