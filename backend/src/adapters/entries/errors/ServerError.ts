/**
 * @class ServerError It will happen when something unexpected is performed
 * @method super Returns the message when an error occurs
 * @property this.name Error name
 * @property this.stack offer a trace of which functions were called, in what order, from which line and file, and with what arguments.
 */
export class ServerError extends Error {
  constructor (stack: string) {
    super('Internal server error')
    this.name = 'ServerError'
    this.stack = stack
  }
}
