import { Request, Response } from 'express';
import { ProductService } from '../../services/product.service';
import { ICreateProductDTO } from '../../dto/create-product.dto';
import { IDeleteProductDTO } from '../../dto/delete-product.dto';

// The product service instantation, could be improved to use Dependency Injection
const productService = new ProductService();

/**
 * App Product Controller which handles the request received on the App Product Route
 */
export class ProductController {

  /**
   * Searchs for all the existing products through the ProductService
   *
   * @param req request object
   * @param res response object
   * @returns an array of product objects found
   */
  async listAllProducts(req: Request, res: Response) {
    try {
      const product = await productService.listProducts();

      return res.json(product);
    }
    catch (e: any) {
      return res.status(400).json({ message: e.message });
    }
  }

  /**
   * Creates a product given its request body through the ProductService
   *
   * @param req request object
   * @param res response object
   * @returns the created product
   */
  async createProduct(req: Request, res: Response) {
    try {
      const productDTO = req.body as ICreateProductDTO;

      const product = await productService.createProduct(productDTO);

      return res.json(product);
    }
    catch (e: any) {
      return res.status(400).json({ message: e.message });
    }
  }

  /**
   * Deletes a product given its request body through the ProductService
   *
   * @param req request object
   * @param res response object
   * @returns a success message json
   */
  async deleteProduct(req: Request, res: Response) {
    try {
      const deleteProductDTO = req.body as IDeleteProductDTO;

      const deletedProduct = await productService.deleteProductById(deleteProductDTO);

      if (!deletedProduct) return res.status(400).json({ message: 'Product not found!' });

      return res.json({ message: 'Product successfully deleted', id: deleteProductDTO.id });
    }
    catch (e: any) {
      return res.status(400).json({ message: e.message });
    }
  }
}
