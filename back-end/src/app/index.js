const express = require('express');
const cors = require('cors');
// const sql = require('../db')
const swaggerUi = require('swagger-ui-express');
const data = require('../data');
const about = require('./about');
const admin = require('./admin');
const attraction = require('./attraction');
const contact = require('./contact');
const dashboard = require('./dashboard');
const faq = require('./faq');
const payment = require('./payment');
const welcome = require('./welcome');

const app = express();

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  //const swaggerDocument = require('./swagger.json');
  //app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}
/**
 * This function comment is parsed by doctrine
 * @route GET /api
 * @group foo - Operations about user
 * @param {string} email.query.required - username or email - eg: user@domain
 * @param {string} password.query.required - user's password.
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */


app.use(cors({ credentials: true, origin: true }));
app.use('/about', about);
app.use('/admin', admin);
app.use('/attraction', attraction);
app.use('/contact', contact);
app.use('/dashboard', dashboard);
app.use('/faq', faq);
app.use('/payment', payment);
app.use('/welcome', welcome);

/*
 * example of basic api routing, refer to api.js to get the routing links
 */
const test = require('./test');

app.use('/test', test); // type 'localhost:3001/test/hello' in browser
app.get('/testing', (req, res) => { // type 'localhost:3001/testing' in browser
  const info = { name: 'my_name' };
  res.send(info);
  console.log(data);
  /*
   * example of database call (DO NOT DELETE!)
   *
  sql.query('select * from customers', function(err, rows, fields) {
    console.log(rows)
  })
  */
});

module.exports = app;
