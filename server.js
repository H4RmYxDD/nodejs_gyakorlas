const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello üdvözöllek a weboldalamon.');
});

app.listen(3003, () => {
  console.log('Szerver fut a 3003-as porton.');
});
