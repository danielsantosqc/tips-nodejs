// express js

const express = require ('express');
const app = express();
const port = 5000;

app.get('/', (req, res)=> {
  res.send("Visitaste la pagina de inicio....");
});

app.listen(port, () => console.log('Funcionoo....'))