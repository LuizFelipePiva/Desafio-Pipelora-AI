require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

// Rota Integrar
const integrarRoutes = require('./routes/integrar');
app.use('/integrar', integrarRoutes);


app.get('/', (req, res) => {
  res.send('api rodando...');
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});