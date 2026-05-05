# Diferencias entre HTTP nativo y Express en Node.js

## Introducción

Node.js permite crear servidores utilizando su módulo nativo `http`, sin embargo, existen frameworks como Express que simplifican este proceso y hacen el desarrollo más eficiente.

## Uso de HTTP nativo

El módulo `http` es parte del núcleo de Node.js y permite crear servidores sin dependencias externas. Sin embargo:

* Requiere escribir más código
* Manejo manual de rutas
* Manejo manual de headers y respuestas
* Difícil de escalar en proyectos grandes

Ejemplo:

```js
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hola mundo');
    res.end();
  }
});

server.listen(3000);
```

## Uso de Express

Express es un framework que facilita la creación de servidores en Node.js.

Ventajas:

* Manejo sencillo de rutas
* Uso de middlewares
* Código más limpio y organizado
* Mayor escalabilidad
* Mejor manejo de peticiones y respuestas

Ejemplo:

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.listen(3000);
```
## Conclusión

Aunque el módulo `http` es útil para entender el funcionamiento interno de Node.js, Express es la mejor opción para desarrollar aplicaciones modernas debido a su simplicidad, organización y eficiencia.
