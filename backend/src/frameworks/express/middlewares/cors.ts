import { Request, Response, NextFunction } from 'express'
/**
 * @var cors Mechanism that allows restricted resources on a web page to be retrieved by another domain outside the domain
 */
export const cors = (req: Request, res: Response, next: NextFunction): void => {
  res.set('access-control-allow-origin', '*')
  res.set('access-control-allow-headers', '*')
  res.set('access-control-allow-methods', '*')
  next()
}
