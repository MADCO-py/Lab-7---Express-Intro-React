const express = require('express');
const app = express();

const PORT = 4000;

// Middleware para leer JSON (necesario para POST)
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send('APPI funcionando');
});

// Ruta GET
app.get('/saludo', (req, res) => {
  res.json({ mensaje: 'Hola desde Express' });
});

// Ruta GET con parámetro
app.get('/users/:nombre', (req, res) => {
  res.json({ mensaje: `Hola ${req.params.nombre}` });
});

// Ruta POST
app.post('/datos', (req, res) => {
  const { nombre } = req.body;

  if (!nombre) {
    return res.status(400).json({ error: 'Falta el nombre' });
  }

  res.json({ mensaje: `Hola ${nombre}` });
});

// Ruta 404 (para cualquier otra ruta)
app.use((req, res) => {
  res.status(404).send('Ruta no encontrada');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});