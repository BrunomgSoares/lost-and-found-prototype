/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { authSecret } from '../../constants/auth.constants';
import { AuthService } from '../../services/auth.service';

const authService = new AuthService();

/**
 * Middleware used to verify if username is already in use
 *
 * @param req request object
 * @param res response object
 * @param next next function
 * @returns next if not in use, appropriate http response if in use
 */
export async function duplicateUsername(req: Request, res: Response, next: NextFunction) {

  const { username } = req.body;

  try {
    const user = await authService.findUserByUsername(username);
    if (user) {
      return res.status(400).send({ message: 'Username is already in use' });
    }
  }
  catch (err) {
    return res.status(500).send({ message: err });
  }
  next();
}

/**
 * Middleware to verify jwt access token provided in the request headers
 *
 * @param req request object
 * @param res response object
 * @param next next function
 * @returns next if valid, appropriate http response if not valid
 */
export function verifyJWT(req: Request, res: Response, next: NextFunction) {
  const token = req.headers['x-access-token']?.toString(); // TODO verify this name

  if (!token) {
    return res.status(403).send({ message: 'No access token provided' });
  }

  jwt.verify(token, authSecret, (err) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized access' });
    }
    next();
  });
}
