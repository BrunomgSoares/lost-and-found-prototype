/**
* App routes root definitions.
*/
import { Router } from 'express';
import product from './product.route';
import auth from './auth.route';

const router = Router();


// To confirm setup only.
router.get('/api/v1', (req, res) => res.send('Hi! This is a Lost and Found prototype app for AirportAI!'));

/**
 * Addition of the product router to the application root router
 */
router.use('/api/v1/product', product);

router.use('/api/v1/auth', auth);


export default router;
