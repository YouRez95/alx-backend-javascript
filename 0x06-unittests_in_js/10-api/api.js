const express = require('express');

const app = express();

app.use(express.json())

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

app.get('/available_payments', (_, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  })
})

app.post('/login', (req, res) => {
  res.send(`Welcome ${req.body.userName}`)
})

app.listen(7865, () => console.log('API available on localhost port 7865'));

module.exports = app;