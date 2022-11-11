import moment from 'moment';
import { ICreateProductDTO } from '../dto/product/create-product.dto';
import { IProduct } from '../models/product/product.interface';
import ProductRepository from '../models/product/product.model';
import { IDeleteProductDTO } from '../dto/product/delete-product.dto';
import { IProductDTO } from '../dto/product/product.dto';
import { bestResult, preparePromptMessage } from '../utils/search.utils';

/**
 * Product Service layer used to access the application data layer.
 */
export class ProductService {

  /**
   * Lists all products existing in the database product repository
   *
   * @returns an array of existing products
   */
  async listAllProducts(): Promise<IProduct[]> {
    const products: IProduct[] = await ProductRepository.find();

    return products;
  }

  /**
   * Querys products existing in the database product repository given a product characteristics.
   * Uses the input lost at date as a date range
   *
   * @returns an array of existing products
   */
  async queryProducts(productDTO: IProductDTO): Promise<IProduct[]> {
    const startDateRange = moment(productDTO.lostAt).subtract('1', 'days').toDate();
    const endDateRange = moment(productDTO.lostAt).add('1', 'days').toDate();

    const queryFields: { [key: string]: any } = {};

    // Reduce productDTO undefined fields with adition to lostAt into queryFields
    Object.keys(productDTO).forEach((k) => {
      if (productDTO[k as keyof typeof productDTO] !== undefined && k !== 'lostAt') queryFields[k] = productDTO[k as keyof IProductDTO]?.toString().toUpperCase();
    });

    const products: IProduct[] = await ProductRepository.find().and([
      {
        lostAt: {
          $gte: startDateRange,
          $lte: endDateRange,
        },
      },
      queryFields,
    ]);

    return products;
  }

  /**
   * Searches for a product based on the message prompt and lostAt date
   *
   * @param prompt the user inputed prompt message
   * @param lostAt the user inputed lost at date
   * @returns the most similar product found or a list of products in case of many
   */
  async productsPromptSearch(prompt: string, lostAt: Date): Promise<IProduct[]> {
    const startDateRange = moment(lostAt).subtract('1', 'hour').toDate();
    const endDateRange = moment(lostAt).add('1', 'hour').toDate();

    const message = preparePromptMessage(prompt);

    const products = await ProductRepository.find({
      lostAt: {
        $gte: startDateRange,
        $lte: endDateRange,
      },
    });

    return bestResult(message, products);
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
