const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const data = {
  title: 'Atomic Habits',
  author: 'James Clear',
};

app.get('/hello', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/', (req, res) => {
  res.send(JSON.stringify(data));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
