require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/todos', require('./routes/index'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public'));
  app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });
}

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
