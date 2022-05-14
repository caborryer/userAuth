import { registerAs } from "@nestjs/config";
import * as Joi from "joi";

import { environments } from "./environments";

export default registerAs("config", () => {
  return {
    nodeEnv: process.env.NODE_ENV,
    port: process.env.PORT,
    mongo: {
      dbName: process.env.MONGO_DB,
      user: process.env.MONGO_INITDB_ROOT_USERNAME,
      password: process.env.MONGO_INITDB_ROOT_PASSWORD,
      port: parseInt(process.env.MONGO_PORT, 10),
      host: process.env.MONGO_HOST,
      connection: process.env.MONGO_CONNECTION,
    },
  };
});

export const configValidationSchema = Joi.object({
  NODE_ENV: Joi.string().valid(...Object.keys(environments)),
  PORT: Joi.number().integer(),
});
