
const express = require('express');

const app = express();

app.use(express.static('./dist/oblako-todo'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', { root: 'dist/oblako-todo' });
});

app.listen(process.env.PORT || 8080);
