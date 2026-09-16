import Fastify from 'fastify';
import fastifyEnv from '@fastify/env';
import { envOptions } from './config/env.js';
export async function buildApp() {
    const app = Fastify({
        logger: true,
    });
    await app.register(fastifyEnv, envOptions);
    app.get('/health', async () => {
        return { status: 'ok', timestamp: new Date().toISOString() };
    });
    app.get('/ready', async () => {
        return { status: 'ready' };
    });
    return app;
}
//# sourceMappingURL=app.js.map