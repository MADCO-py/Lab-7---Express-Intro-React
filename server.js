const express = require('express');
const app = express();

const PORT = 3000;

// Middleware para JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send('Servidor funcionando con Express 🚀');
});

// Ejemplo GET
app.get('/saludo', (req, res) => {
  res.json({ mensaje: 'Hola desde Express' });
});

// Ejemplo POST
app.post('/datos', (req, res) => {
  const { nombre } = req.body;
  res.json({ mensaje: `Hola ${nombre}` });
});

// Ruta 404
app.use((req, res) => {
  res.status(404).send('Ruta no encontrada');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});