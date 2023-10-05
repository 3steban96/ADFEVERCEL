const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors'); 

const mainRouter = require('./routes/index'); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors());

app.use('/', mainRouter); 

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
