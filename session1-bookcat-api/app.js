const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Book Category API');
});

app.get('/categories', (req, res) => {
  res.json([
    { id: 1, name: 'Fiction' },
    { id: 2, name: 'Non-Fiction' },
    { id: 3, name: 'Biography' }
  ]);
});

app.get('/about', (req, res) => {
  res.send(
    "Hi, I'm Nathan, a student in the Backend Development (BED) module. " +
    'This is my first Express server, built for Session 1. ' +
    "I'm looking forward to connecting it to a real database next."
  );
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
