/**
* App entrypoint.
*/
'use strict';

let app = require('express')();
const PORT = 3000;

// Set up Express.
require('./setup/express');

// Set up MongoDB.
require('./setup/mongoose')();

// Set up routes.
app.use('/', require('./routes'));

// Start app.
app.listen(PORT, function() {
  console.log('App now listening on port ' + PORT);
});

module.exports = app;
