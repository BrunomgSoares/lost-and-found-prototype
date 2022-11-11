import { Joi } from 'celebrate';

/**
 * Joi schema used by route middlwares to verify the body request when receiving a user form
 */
export const AuthJoi = Joi.object({
  username: Joi.string()
    .required()
    .empty()
    .min(5)
    .messages({
      'string.base': '"username" should be a \'text\'',
      'string.empty': '"username" cannot be an empty field',
      'any.required': '"username" is a required field',
    }),
  password: Joi.string()
    .required()
    .empty()
    .min(5)
    .messages({
      'string.base': '"password" should be a \'text\'',
      'string.empty': '"password" cannot be an empty field',
      'any.required': '"password" is a required field',
    }),
});
