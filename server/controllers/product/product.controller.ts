import { Request, Response } from 'express';
import { ProductService } from '../../services/product.service';
import { ICreateProductDTO } from '../../dto/product/create-product.dto';
import { IDeleteProductDTO } from '../../dto/product/delete-product.dto';
import { IProductDTO } from '../../dto/product/product.dto';

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
  async listProducts(req: Request, res: Response) {
    try {
      if (req.query) {
        const lostAtString = req.query.lostAt?.toString();
        if (lostAtString) {
          const lostAt = new Date(lostAtString);

          const productQuery: IProductDTO = {
            type: req.query.type?.toString(),
            size: req.query.size?.toString(),
            brand: req.query.brand?.toString(),
            model: req.query.model?.toString(),
            color: req.query.color?.toString(),
            lostAt,
          };

          const products = await productService.queryProducts(productQuery);
          return res.json(products);
        }
      }

      const products = await productService.listAllProducts();

      return res.json(products);
    }
    catch (e: any) {
      return res.status(500).json({ message: e.message });
    }
  }

  /**
   * Searches for a product based on the message prompt
   *
   * @param req request object
   * @param res response objcet
   * @returns an list of products found similar to the prompt message indications
   */
  async productsPromptSearch(req: Request, res: Response) {
    try {
      const { prompt } = req.query;
      let { lostAt }: any = req.query;
      if (lostAt && prompt) {
        lostAt = new Date(lostAt.toString());

        const product = await productService.productsPromptSearch(prompt.toString(), lostAt);

        if (!product) return res.status(400).json({ message: 'There was a problem with your request!' });

        return res.json(product);
      }
      return res.status(400).json({ message: 'There was a problem with your request!' });
    }
    catch (e: any) {
      return res.status(500).json({ message: e.message });
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

      if (!product) return res.status(400).json({ message: 'There was a problem with your request!' });

      return res.status(201).json(product);
    }
    catch (e: any) {
      return res.status(500).json({ message: e.message });
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
      const deleteProductDTO: IDeleteProductDTO = {
        id: req.params.id,
      };

      const deletedProduct = await productService.deleteProductById(deleteProductDTO);

      if (!deletedProduct) return res.status(400).json({ message: 'Product not found!' });

      return res.json({ message: 'Product successfully deleted', id: deleteProductDTO.id });
    }
    catch (e: any) {
      return res.status(500).json({ message: e.message });
    }
  }
}
