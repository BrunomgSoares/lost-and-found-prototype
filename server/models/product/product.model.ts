import { Schema, model } from 'mongoose';
import { IProduct } from './product.interface';

/**
 * The Product schema used to define all the product attributes and associated requirements.
 */
const productSchema = new Schema<IProduct>({
  type: {
    type: String,
    required: [true, 'Please enter a type'],
    uppercase: true,
  },
  size: {
    type: String,
    required: [true, 'Please enter a size'],
    enum: {
      values: ['SMALL', 'MEDIUM', 'BIG'],
      message: 'Must be one of the following: \'small\' \'medium\' \'big\'',
    },
    uppercase: true,
  },
  brand: {
    type: String,
    required: [true, 'Please enter a brand'],
    uppercase: true,
  },
  model: {
    type: String,
    required: false,
    uppercase: true,
  },
  color: {
    type: String,
    required: [true, 'Please enter a color'],
    uppercase: true,
  },
  lostAt: {
    type: Date,
    required: [true, 'Please enter a lost date time'],
  },
});

/**
 * The Data Access layer model which will be used by the Application Service layer
 */
export default model<IProduct>('Product', productSchema);
