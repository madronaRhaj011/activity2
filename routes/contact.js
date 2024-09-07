const express = require('express');
const router = express.Router();

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  console.log(`Received message from ${name} (${email}): ${message}`);

  res.send(`<h2>Thank you, ${name}! Your message has been received.</h2>`);
});

module.exports = router;

