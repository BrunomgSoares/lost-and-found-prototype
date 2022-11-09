/**
* Setup Express app.
*/
'use strict';

import { Express } from 'express';

let helmet = require('helmet');
let methodOverride = require('method-override');
let express = require('express');

/**
* Sets up Express app.
*
* @param {Object} app  The express app.
*/
export default function setup(app: Express) {
  app.use(helmet());
  app.use(methodOverride());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  return app;
};
