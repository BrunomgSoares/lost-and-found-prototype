import { Joi } from 'celebrate';

/**
 * Joi schema used by route middlwares to verify the body request when deleting a product
 */
export const DeleteProductJoi = Joi.object({
  id: Joi.string()
    .required()
    .empty()
    .messages({
      'string.base': '"id" should be a \'text\'',
      'string.empty': '"id" cannot be an empty field',
      'any.required': '"id" is a required field',
    }),
});
