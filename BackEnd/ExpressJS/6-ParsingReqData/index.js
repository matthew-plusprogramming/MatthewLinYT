const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const data = {
  title: 'Atomic Habits',
  author: 'James Clear',
};

app.use(express.static('static'));

// GET POST

app.get('/hello', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/', (req, res) => {
  console.log(req.query.message);

  res.send(JSON.stringify(req.query.message));
});
app.post('/api/post', (req, res) => {
  console.log('Updating data');
  data.title = 'New Atomic Habits';
  res.send(JSON.stringify(data));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
