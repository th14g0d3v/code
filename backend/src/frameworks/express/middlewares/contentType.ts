import { Request, Response, NextFunction } from 'express'
/**
 * @var contentType In response object is used to set the type of the response
 */
export const contentType = (req: Request, res: Response, next: NextFunction): void => {
  res.type('json')
  next()
}
