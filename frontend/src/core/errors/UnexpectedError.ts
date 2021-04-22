/** 
 * @class UnexpectedError This is the only case of error in this application
 * @constructor A class method
 * @method super A method taht refers to the parent class
 * @property this A object that refers to the object it belongs to
 * @property this.name Error name
 */
export class UnexpectedError extends Error {
  constructor () {
    super('Algo de errado aconteceu. Tente novamente em breve.')
    this.name = 'UnexpectedError'
  }
}
