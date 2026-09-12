import Fastify from 'fastify';
const fastify = Fastify({ logger: true });
fastify.addHook('onRequest', async (request, reply) => {
    const apiKey = request.headers['x-api-key'];
    if (!apiKey || apiKey !== 'secret-123') {
        reply.status(401);
        return reply.send({ error: 'Unauthorized: Invalid or missing API key' });
    }
});
fastify.get('/dashboard', async (request, reply) => {
    return { data: 'Welcome to the secret dashboard!' };
});
const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
    }
    catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
//# sourceMappingURL=src.js.map