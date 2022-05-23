import express from "express";
import bodyParser from "body-parser";
import db, { initializeDB } from "./db";
import { initializingQueries } from "./initializingQueries";
import tableRouter from "./routes/transportation.router";

async function bootstrap() {
  const app = express();
  const PORT = process.env.PORT || 5000;

  app.use(require("cors")("*"));

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(tableRouter);

  await initializeDB(db, initializingQueries);
  app.listen(PORT, () => {});
}

bootstrap();
