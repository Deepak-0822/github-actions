const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  const response = await axios.get('https://api.github.com');
  res.json({
    message: 'Hello from Node.js Express API!',
    github: response.data.current_user_url,
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`Node.js server running at http://localhost:${port}`);
});
