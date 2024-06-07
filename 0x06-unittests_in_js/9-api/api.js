const express = require('express');

const app = express();

app.get('/', (_, res) => {
  console.log('tete')
  res.send('Welcome to the payment system');
})

app.get('/cart/:id', (req, res) => {
  
  const isNumeric = (value) => {
    return /^\d+$/.test(value);
  }

  if (!isNumeric(req.params.id)) {
    res.statusCode = 404;
  } else {
    res.statusCode = 200;
  }
  res.send('Payment methods for cart ' + req.params.id);
})

app.listen(7865, () => console.log('API available on localhost port 7865'));

module.exports = app;