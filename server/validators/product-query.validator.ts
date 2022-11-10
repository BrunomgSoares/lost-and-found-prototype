import { Joi } from 'celebrate';

/**
 * Joi schema used by route middlwares to verify the body request when creating a product
 */
export const ProductQueryJoi = Joi.object({
  type: Joi.string()
    .empty()
    .min(3)
    .max(50)
    .messages({
      'string.base': '"type" should be a \'text\'',
      'string.empty': '"type" cannot be an empty field',
      'string.min': '"type" should have a minimum length of {#limit}',
      'string.max': '"type" should have a maximum length of {#limit}',
    }),
  size: Joi.string()
    .empty()
    .min(3)
    .max(50)
    .messages({
      'string.base': '"size" should be a \'text\'',
      'string.empty': '"size" cannot be an empty field',
      'string.min': '"size" should have a minimum length of {#limit}',
      'string.max': '"size" should have a maximum length of {#limit}',
    }),
  brand: Joi.string()
    .empty()
    .min(3)
    .max(50)
    .messages({
      'string.base': '"brand" should be a \'text\'',
      'string.empty': '"brand" cannot be an empty field',
      'string.min': '"brand" should have a minimum length of {#limit}',
      'string.max': '"brand" should have a maximum length of {#limit}',
    }),
  model: Joi.string()
    .empty()
    .min(3)
    .max(50)
    .messages({
      'string.base': '"model" should be a \'text\'',
      'string.empty': '"model" cannot be an empty field',
      'string.min': '"model" should have a minimum length of {#limit}',
      'string.max': '"model" should have a maximum length of {#limit}',
    }),
  color: Joi.string()
    .empty()
    .min(3)
    .max(50)
    .messages({
      'string.base': '"color" should be a \'text\'',
      'string.empty': '"type" cannot be an empty field',
      'string.min': '"color" should have a minimum length of {#limit}',
      'string.max': '"color" should have a maximum length of {#limit}',
    }),
  lostAt: Joi.date()
    .empty()
    .less('now')
    .min('1-1-2000')
    .messages({
      'date.base': '"lost at" should be a \'date\'',
      'date.empty': '"lost at" cannot be an empty field',
      'date.less': '"lost at" must be before the current date time',
      'date.min': '"lost at" minimum date time allowed is {#limit}',
    }),
})
  .with('type', 'lostAt')
  .with('size', 'lostAt')
  .with('brand', 'lostAt')
  .with('model', 'lostAt')
  .with('color', 'lostAt');
