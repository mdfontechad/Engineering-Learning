import type { FastifyEnvOptions } from "@fastify/env";

export const envSchema={
    type:'object',
    required:['PORT','HOST'],
    properties:{
    PORT: { type: 'string', default: '3000' },
    HOST: { type: 'string', default: '0.0.0.0' },
    DATABASE_URL: { type: 'string' },
    NODE_ENV: { type: 'string', default: 'development' },
  },
};

export const envOptions: FastifyEnvOptions = {
  schema: envSchema,
  dotenv: true,
  data: process.env,
};

declare module 'fastify' {
  interface FastifyInstance {
    config: {
      PORT: string;
      HOST: string;
      NODE_ENV: string;
    };
  }
}