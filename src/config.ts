import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

import { environments } from './environments';

export default registerAs('config', () => {
  return {
    nodeEnv: process.env.NODE_ENV,
    port: process.env.PORT,
  };
});

export const configValidationSchema = Joi.object({

  NODE_ENV: Joi.string().valid(...Object.keys(environments)),
  PORT: Joi.number().integer(),
//   LOG_FILE: Joi.string().valid('true', 'false'),
//   LOG_LEVEL: Joi.string().valid(
//     'error',
//     'warn',
//     'info',
//     'http',
//     'verbose',
//     'debug',
//     'silly',
//   ),
});