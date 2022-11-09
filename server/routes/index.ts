/**
* App routes root definitions.
*/
import { Router } from 'express';
import product from './product.route';

const router = Router();


// To confirm setup only.
router.get('/', (req, res) => res.send('Hi! This is a Lost and Found prototype app for AirportAI!'));

/**
 * Addition of the product router to the application root router
 */
router.use('/product', product);


export default router;
