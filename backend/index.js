import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

try {
  const port = process.env.APP_PORT;
  app.listen(port, () => {
    console.log("El servidor está funcionando en el puerto " + port);
  });
} catch (err) {
  console.error(err);
}
