import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
import '../src/database.js';
import api from '../src/api/apiRoute';
import bodyParser from 'body-parser';

/*eslint-disable no-console */

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(compression());
app.use(express.static('dist'));
app.use('/api', api);
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});