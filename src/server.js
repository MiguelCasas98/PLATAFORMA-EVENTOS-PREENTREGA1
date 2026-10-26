import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";

import { env } from "./config/config.js";

const PORT = env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});