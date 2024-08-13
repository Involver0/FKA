const express = require('express');
const app = express();
app.use(express.json());

const data = {
  categories: [
    {
      id: 1,
      name: 'Food',
      bgcolor: { hex: '#f00' },
      icon: { url: 'http://example.com/icon1.png' },
    },
    {
      id: 2,
      name: 'Retail',
      bgcolor: { hex: '#0f0' },
      icon: { url: 'http://example.com/icon2.png' },
    },
  ],
  businesses: [
    {
      id: 1,
      name: 'Business One',
      about: 'Description One',
      address: 'Address One',
      category: 'Food',
      contactPerson: 'Person One',
      email: 'email@example.com',
      images: [{ url: 'http://example.com/image1.png' }],
    },
    {
      id: 2,
      name: 'Business Two',
      about: 'Description Two',
      address: 'Address Two',
      category: 'Retail',
      contactPerson: 'Person Two',
      email: 'email2@example.com',
      images: [{ url: 'http://example.com/image2.png' }],
    },
  ],
  bookings: [],
};

// Categories
app.get('/categories', (req, res) => {
  res.json(data.categories).status(200);
});

app.post('/categories', (req, res) => {
  const newCategory = {
    id: data.categories.length + 1,
    ...req.body,
  };
  data.categories.push(newCategory);
  res.status(201).json(newCategory);
});

// Businesses
app.get('/businesses', (req, res) => {
  res.json(data.businesses).status(200);
});

// additionl

app.post('/businesses', (req, res) => {
  const newBusiness = {
    id: data.businesses.length + 1,
    ...req.body,
  };
  data.businesses.push(newBusiness);
  res.status(201).json(newBusiness);
});

// end of additional

app.get('/businesses/category/:category', (req, res) => {
  const filteredBusinesses = data.businesses.filter(
    (b) => b.category.toLowerCase() === req.params.category.toLowerCase()
  );
  res.json(filteredBusinesses);
});

app.get('/businesses/:id', (req, res) => {
  const business = data.businesses.find((b) => b.id == req.params.id);
  if (business) {
    res.json(business);
  } else {
    res.status(404).send('Business not found');
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
