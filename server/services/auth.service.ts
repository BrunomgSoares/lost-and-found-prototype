import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { authSecret } from '../constants/auth.constants';
import { IUserDTO } from '../dto/user/user.dto';
import { IUser } from '../models/user/user.interface';
import UserRepository from '../models/user/user.model';

/**
 * Auth Service layer used to access the application data layer.
 */
export class AuthService {

  /**
   * Finds an user in the database given its username
   *
   * @returns the found user, null if not found
   */
  async findUserByUsername(username: string): Promise<IUser | null> {
    const user = await UserRepository.findOne({
      username,
    });

    if (!user) return null;

    return user.toObject();
  }

  /**
   * Encrypts the user password and regist the user in the database, given its
   * username and encrypted password
   *
   * @param createUserDTO the DTO used to create the user
   * @returns the stored user username
   */
  async signUp(createUserDTO: IUserDTO) {
    const { username } = createUserDTO;
    const password = bcrypt.hashSync(createUserDTO.password, 8);

    const user = new UserRepository({
      username,
      password,
    });

    await user.save();

    return user.username;
  }

  /**
   * Verifies if user is valid for sign in given its username and password
   *
   * @param userDTO the DTO used to validate the user
   * @returns the user new jwt access token, null if invalid signin
   */
  async signIn(userDTO: IUserDTO) {
    const { username } = userDTO;
    const { password } = userDTO;

    const user = await this.findUserByUsername(username);
    if (!user) return null;

    const passwordValid = bcrypt.compareSync(
      password,
      user.password,
    );
    if (!passwordValid) return null;

    const accessToken = jwt.sign({
      id: user.username,
    }, authSecret, { expiresIn: 60 * 60 * 24 });

    return accessToken;
  }
}
