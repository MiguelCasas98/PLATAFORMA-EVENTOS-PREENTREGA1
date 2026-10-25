# Plataforma de Eventos – Pre‑Entrega 1

### Descripción

Base arquitectónica inicial para la Plataforma de Eventos e Inscripciones.
Este proyecto prepara la estructura profesional del backend para las próximas entregas del curso Backend II.

### Tecnologías utilizadas

* Node.js
* Express
* ESM (import/export)
* dotenv

### Estructura del proyecto

```
src/
  app.js
  server.js
  config/
  routes/
    events.router.js
    sessions.router.js
  controllers/
    events.controller.js
    sessions.controller.js
  services/
  repositories/
  dao/
  models/
    User.js
    Event.js
  middlewares/
  utils/
.env.example
.gitignore
package.json
README.md
```

### Instalación

```
npm install
```

### Variables de entorno

Crear un archivo .env basado en .env.example.

Variables necesarias:

* PORT
* NODE_ENV
* MONGO_URL
* JWT_SECRET

### Cómo ejecutar el proyecto

```
npm run start
```

El servidor se inicia en el puerto definido en .env.

# Rutas disponibles

### GET /api/health

Devuelve:

```
{ "status": "ok", "message": "Servidor activo" }
```

### GET /api/events

Devuelve:

```
{ "status": "success", "payload": [] }
```

### GET /api/sessions

Devuelve:

```
{ "status": "success", "payload": [] }
```