/**
* Products routes definitions.
*/

import { celebrate, errors } from 'celebrate';
import { Router } from 'express';
import { CreateProductJoi } from '../validators/create-product.validator';
import { ProductController } from '../controllers/product/product.controller';
import { DeleteProductJoi } from '../validators/delete-product.validator';

const route = Router();

const productController = new ProductController();

/**
 * Get All products route definition
 */
route.get(
  '/',
  productController.listAllProducts,
);

/**
 * Create a new product route definition
 */
route.post(
  '/',
  celebrate({
    body: CreateProductJoi,
  }),
  productController.createProduct,
);

/**
 * Delete a product by id route definition
 */
route.delete(
  '/',
  celebrate({
    body: DeleteProductJoi,
  }),
  productController.deleteProduct,
);

/**
 * Add celebrate package errors middlware to return messages when Joi validation fails
 */
route.use(errors());

/**
 * Router to be used in the index routes
 */
export default route;
