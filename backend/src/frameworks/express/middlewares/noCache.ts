import { Request, Response, NextFunction } from 'express'
/**
 * @var noCache directive means that a browser may cache a response, but must first submit a validation request to an origin server
 */
export const noCache = (req: Request, res: Response, next: NextFunction): void => {
  res.set('cache-control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  res.set('pragma', 'no-cache')
  res.set('expires', '0')
  res.set('surrogate-control', 'no-store')
  next()
}
