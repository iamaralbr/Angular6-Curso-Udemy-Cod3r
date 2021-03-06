import { Request, Response, NextFunction } from 'express'

import * as jwt from 'jsonwebtoken'
import { apiConfig } from './api-config'

export const handleAuthorization = (req: Request, res: Response, next: NextFunction) => {
  type Error = jwt.JsonWebTokenError | jwt.NotBeforeError | jwt.TokenExpiredError
  const token = extractToken(req)
  if (!token) {
    res.setHeader('WWW-Authenticate', 'Bearer token_type="JWT"')
    res.status(401).json({ message: 'Você precisa se autenticar.' })
  } else {
    jwt.verify(token, apiConfig.secret, (error: Error, decoded: object | string) => {
      if (decoded) {
        next()
      } else {
        res.status(403).json({ message: 'Não autorizado.' })
      }
    })
  }
}

function extractToken(req: Request): string | undefined {
  let token = undefined
  if (req.headers) {
    const authorization: string | undefined = req.headers.authorization
    if (authorization) { // Authorization: Bearer ZZZ.ZZZ.ZZZ
      const parts: string[] = authorization.split(' ')
      if (parts.length === 2 && parts[0] === 'Bearer') {
        token = parts[1]
      }
    }
    return token
  }
}