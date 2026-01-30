const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'payment-service' });
});

app.post('/api/v1/payments', (req, res) => {
  const { amount, currency, customerId } = req.body;
  res.json({ id: `pay_${Date.now()}`, amount, currency, status: 'processing' });
});

app.get('/api/v1/invoices/:id', (req, res) => {
  res.json({ id: req.params.id, status: 'paid', amount: 9900 });
});

app.listen(port, () => console.log(`Payment service on port ${port}`));
