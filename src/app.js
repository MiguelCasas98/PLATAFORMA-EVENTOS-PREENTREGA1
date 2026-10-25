import express from "express";

const app = express();

app.use(express.json());

// Health
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Servidor activo",
  });
});

// Rutas
import eventsRouter from "./routes/events.router.js";
import sessionsRouter from "./routes/sessions.router.js";

app.use("/api/events", eventsRouter);
app.use("/api/sessions", sessionsRouter);

export default app;