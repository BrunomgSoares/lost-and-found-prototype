import { Schema, model } from 'mongoose';
import { IUser } from './user.interface';

/**
 * The User schema used to define all the user attributes and associated requirements.
 */
const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: [true, 'Please enter a username'],
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
  },
});

/**
 * The Data Access layer model which will be used by the Application Service layer
 */
export default model<IUser>('User', userSchema);
