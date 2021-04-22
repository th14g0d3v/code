/**
 * @class RequiredFieldError This error is called when a required field is missing, this avoids some types of hacks in the application
 * @constructor A class method
 * @method super A method taht refers to the parent class
 * @property this,name Error name
 */
export class RequiredFieldError extends Error {
  constructor () {
    super('Required Field')
    this.name = 'RequiredFieldError'
  }
}
