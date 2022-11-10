import { Joi } from 'celebrate';

/**
 * Joi schema used by route middlwares to verify the body request when creating a product
 */
export const ProductPromptSearchJoi = Joi.object({
  prompt: Joi.string()
    .required()
    .empty()
    .min(3)
    .messages({
      'string.base': '"prompt message" should be a \'text\'',
      'string.empty': '"prompt message" cannot be an empty field',
      'string.min': '"prompt message" should have a minimum length of {#limit}',
      'any.required': '"prompt message" is a required field',
    }),
  lostAt: Joi.date()
    .required()
    .empty()
    .less('now')
    .min('1-1-2000')
    .messages({
      'date.base': '"lost at" should be a \'date\'',
      'date.empty': '"lost at" cannot be an empty field',
      'date.less': '"lost at" must be before the current date time',
      'date.min': '"lost at" minimum date time allowed is {#limit}',
      'any.required': '"lost at" is a required field',
    }),
});
