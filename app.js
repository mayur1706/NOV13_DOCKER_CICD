const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello! Node.js server 5000 port par successfully run kar raha hai.',
    status: 'success'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

