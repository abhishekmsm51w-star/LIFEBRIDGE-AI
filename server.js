const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

// Serve static assets from root directory
app.use(express.static(__dirname));

// Direct all requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`LifeBridge AI server running on port ${port}`);
});
