/**
* Products routes definitions.
*/

import { celebrate, errors } from 'celebrate';
import { Router } from 'express';
import { CreateProductJoi } from '../validators/create-product.validator';
import { ProductController } from '../controllers/product/product.controller';
import { DeleteProductJoi } from '../validators/delete-product.validator';
import { ProductQueryJoi } from '../validators/product-query.validator';
import { ProductPromptSearchJoi } from '../validators/product-search-promp.validator';
import { verifyJWT } from './middlewares/auth.middleware';

const route = Router();

const productController = new ProductController();

/**
 * Get products route definition
 */
route.get(
  '/',
  celebrate({
    query: ProductQueryJoi,
  }),
  productController.listProducts,
);

/**
 * Search products based on the message prompt route definition
 */
route.get(
  '/search',
  celebrate({
    query: ProductPromptSearchJoi,
  }),
  productController.productsPromptSearch,
);

/**
 * Create a new product route definition
 */
route.post(
  '/',
  [
    verifyJWT,
    celebrate({
      body: CreateProductJoi,
    }),
  ],
  productController.createProduct,
);

/**
 * Delete a product by id route definition
 */
route.delete(
  '/:id',
  [
    verifyJWT,
    celebrate({
      params: DeleteProductJoi,
    }),
  ],
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
