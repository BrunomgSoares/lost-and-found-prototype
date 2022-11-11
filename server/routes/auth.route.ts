/**
* Products routes definitions.
*/

import { celebrate, errors } from 'celebrate';
import { Router } from 'express';
import { duplicateUsername } from './middlewares/auth.middleware';
import { AuthController } from '../controllers/auth/auth.controller';
import { AuthJoi } from '../validators/auth.validator';

const route = Router();

const authController = new AuthController();

/**
 * Post signup user route definition
 */
route.post(
  '/sign-up',
  [
    duplicateUsername,
    celebrate({
      body: AuthJoi,
    }),
  ],
  authController.signUp,
);

/**
 * Post signin user route definition
 */
route.post(
  '/sign-in',
  celebrate({
    body: AuthJoi,
  }),
  authController.signIn,
);

/**
 * Add celebrate package errors middlware to return messages when Joi validation fails
 */
route.use(errors());

/**
 * Router to be used in the index routes
 */
export default route;
