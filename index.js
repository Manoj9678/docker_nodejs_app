'use strict';

const express = require('express');

// Constants
const PORT = 3000;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World
           good morining i am Manoj
    i am came from in your heart');
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
