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

// CATEGORIES

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

app.get('/categories/:id', (req, res) => {
  const category = data.categories.find((c) => c.id == req.params.id);
  if (category) {
    res.json(category).status(200);
  } else {
    res.status(404).send('Category not found');
  }
});

app.put('/categories/:id', (req, res) => {
  const categoryIndex = data.categories.findIndex((c) => c.id == req.params.id);
  if (categoryIndex !== -1) {
    const updatedCategory = {
      ...data.categories[categoryIndex],
      ...req.body,
    };
    data.categories[categoryIndex] = updatedCategory;
    res.json(updatedCategory).status(200);
  } else {
    res.status(404).send('Category not found');
  }
});

app.delete('/categories/:id', (req, res) => {
  const categoryIndex = data.categories.findIndex((c) => c.id == req.params.id);
  if (categoryIndex !== -1) {
    data.categories.splice(categoryIndex, 1);
    res.status(204).send(); // No content
  } else {
    res.status(404).send('Category not found');
  }
});

// END OF CATEGORIES

// BUSINESSES

app.get('/businesses', (req, res) => {
  res.json(data.businesses).status(200);
});

app.post('/businesses', (req, res) => {
  const newBusiness = {
    id: data.businesses.length + 1,
    ...req.body,
  };
  data.businesses.push(newBusiness);
  res.status(201).json(newBusiness);
});

app.get('/businesses/:id', (req, res) => {
  const business = data.businesses.find((b) => b.id == req.params.id);
  if (business) {
    res.json(business);
  } else {
    res.status(404).send('Business not found');
  }
});

app.put('/businesses/:id', (req, res) => {
  const businessIndex = data.businesses.findIndex((b) => b.id == req.params.id);
  if (businessIndex !== -1) {
    const updatedBusiness = {
      ...data.businesses[businessIndex],
      ...req.body,
    };
    data.businesses[businessIndex] = updatedBusiness;
    res.json(updatedBusiness).status(200);
  } else {
    res.status(404).send('Business not found');
  }
});

app.delete('/businesses/:id', (req, res) => {
  const businessIndex = data.businesses.findIndex((b) => b.id == req.params.id);
  if (businessIndex !== -1) {
    data.businesses.splice(businessIndex, 1);
    res.status(204).send(); // No content
  } else {
    res.status(404).send('Business not found');
  }
});

// END OF BUSINESSES

app.get('/businesses/category/:category', (req, res) => {
  const filteredBusinesses = data.businesses.filter(
    (b) => b.category.toLowerCase() === req.params.category.toLowerCase()
  );
  res.json(filteredBusinesses);
});

app.use((err, req, res, next) => {
  // Add 'next' as the fourth parameter
  console.error(err.stack);

  res.status(500).json({
    error: {
      message: 'Internal Server Error',
    },
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
