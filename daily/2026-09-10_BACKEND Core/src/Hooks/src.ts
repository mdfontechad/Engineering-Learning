// app.ts
import Fastify from 'fastify';

const fastify = Fastify({ logger: true });

// 1. Register the onRequest hook globally
fastify.addHook('onRequest', async (request, reply) => {
  const apiKey = request.headers['x-api-key'];

  // If the API key is missing or invalid, intercept the request early
  if (!apiKey || apiKey !== 'secret-123') {
    reply.status(401);
    return reply.send({ error: 'Unauthorized: Invalid or missing API key' });
  }

  // If valid, simply returning or completing the function allows execution to continue
});

// 2. Define a protected route handler
fastify.get('/dashboard', async (request, reply) => {
  // This code ONLY executes if the onRequest hook allowed it to pass
  return { data: 'Welcome to the secret dashboard!' };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();