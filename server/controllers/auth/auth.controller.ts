import { Request, Response } from 'express';
import { IUserDTO } from '../../dto/user/user.dto';
import { AuthService } from '../../services/auth.service';

// The auth service instantation, could be improved to use Dependency Injection
const authService = new AuthService();

/**
 * App Auth Controller which handles the request received on the App Auth Route
 */
export class AuthController {

  /**
   * Sign up user given its username and password
   *
   * @param req request object
   * @param res response object
   * @returns success message
   */
  async signUp(req: Request, res: Response) {
    try {
      const createUserDTO = req.body as IUserDTO;
      const user = await authService.signUp(createUserDTO);

      if (!user) return res.status(400).json({ message: 'There was a problem with your request' });

      return res.status(201).json({ message: 'User registered successfully' });
    }
    catch (err) {
      return res.status(500).json({ message: err });
    }
  }

  /**
   * Sign in user given its username and password
   *
   * @param req request object
   * @param res response object
   * @returns jwt access token
   */
  async signIn(req: Request, res: Response) {
    try {
      const createUserDTO = req.body as IUserDTO;
      const accessToken = await authService.signIn(createUserDTO);

      if (!accessToken) return res.status(400).json({ message: 'Invalid credentials' });

      return res.json({ accessToken, message: 'Sign up successful' });
    }
    catch (err) {
      return res.status(500).json({ message: err });
    }
  }
}
