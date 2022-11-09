/**
* App entrypoint.
*/
import bodyParser from 'body-parser';
import route from './routes/index';

const app = require('express')();

const PORT = 3000;

// Set up Express.
require('./setup/express');

// Set up MongoDB.
require('./setup/mongoose')();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up routes.
app.use('/', route);

// Start app.
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App now listening on port ${PORT}`);
});

export default app;
