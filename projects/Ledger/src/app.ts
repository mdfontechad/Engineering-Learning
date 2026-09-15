import Fastify from 'fastify';
import fastifyEnv from '@fastify/env';
import { envOptions } from './config/env.js';

      export async function buildApp() {
const app = Fastify({
    logger: true,
  });

  // Register environment configuration plugin
  await app.register(fastifyEnv, envOptions);

  // Health check: Basic process vitality
  app.get('/health', async () => {
    return { status: 'ok', timestamp: new Date().toISOString() };
  });

  // Ready check: Subsystem/DB readiness (expanded in Milestone 1)
  app.get('/ready', async () => {
    return { status: 'ready' };
  });

  return app;
}