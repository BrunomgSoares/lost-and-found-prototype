import moment from 'moment';
import { ICreateProductDTO } from '../dto/create-product.dto';
import { IProduct } from '../models/product/product.interface';
import ProductRepository from '../models/product/product.model';
import { IDeleteProductDTO } from '../dto/delete-product.dto';
import { IProductDTO } from '../dto/product.dto';

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
