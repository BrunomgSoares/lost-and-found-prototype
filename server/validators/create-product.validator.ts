import { Joi } from 'celebrate';

/**
 * Joi schema used by route middlwares to verify the body request when creating a product
 */
export const CreateProductJoi = Joi.object({
  type: Joi.string()
    .required()
    .empty()
    .max(50)
    .messages({
      'string.base': '"type" should be a \'text\'',
      'string.empty': '"type" cannot be an empty field',
      'string.max': '"type" should have a maximum length of {#limit}',
      'any.required': '"type" is a required field',
    }),
  size: Joi.string()
    .required()
    .empty()
    .min(3)
    .max(50)
    .messages({
      'string.base': '"size" should be a \'text\'',
      'string.empty': '"size" cannot be an empty field',
      'string.max': '"size" should have a maximum length of {#limit}',
      'any.required': '"size" is a required field',
    }),
  brand: Joi.string()
    .required()
    .empty()
    .max(50)
    .messages({
      'string.base': '"brand" should be a \'text\'',
      'string.empty': '"brand" cannot be an empty field',
      'string.max': '"brand" should have a maximum length of {#limit}',
      'any.required': '"brand" is a required field',
    }),
  model: Joi.string()
    .empty()
    .max(50)
    .messages({
      'string.base': '"model" should be a \'text\'',
      'string.empty': '"model" cannot be an empty field',
      'string.max': '"model" should have a maximum length of {#limit}',
    }),
  color: Joi.string()
    .required()
    .empty()
    .max(50)
    .messages({
      'string.base': '"color" should be a \'text\'',
      'string.empty': '"type" cannot be an empty field',
      'string.max': '"color" should have a maximum length of {#limit}',
      'any.required': '"color" is a required field',
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
})
  .with('model', 'brand');
