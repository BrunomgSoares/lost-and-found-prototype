/**
* App routes definitions.
*/
'use strict';

import { Router } from 'express';
let router = Router();

// To confirm setup only.
router.get('/', function(req, res) { return res.send('Hello world!'); });

module.exports = router;
