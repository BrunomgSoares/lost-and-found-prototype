import { ICreateProductDTO } from '../dto/create-product.dto';
import { IProduct } from '../models/product/product.interface';
import ProductRepository from '../models/product/product.model';
import { IDeleteProductDTO } from '../dto/delete-product.dto';

/**
 * Product Service layer used to access the application data layer.
 */
export class ProductService {

  /**
   * Lists all products existing in the database product repository
   *
   * @returns an array of existing products
   */
  async listProducts(): Promise<IProduct[]> {
    const products: IProduct[] = await ProductRepository.find();

    return products;
  }

  /**
   * Creates a product given its ICreateProductDTO object
   *
   * @param productDTO the product dto the be persisted
   * @returns the persisted product
   */
  async createProduct(productDTO: ICreateProductDTO) {
    const product = new ProductRepository(productDTO);

    await product.save();

    return product;
  }

  /**
   * Deletes a product given its id
   *
   * @param productDTO the productDTO id
   * @returns the deleted product or null if not found
   */
  async deleteProductById(productDTO: IDeleteProductDTO) {
    const deletedProduct = await ProductRepository.findByIdAndDelete(productDTO.id);

    return deletedProduct;
  }
}
