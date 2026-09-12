import Fastify from 'fastify';
import { CustomerService } from './usingInterface';
const fastify = Fastify({ logger: true });
const customerService = new CustomerService();
fastify.get('/customers/:id', async (request, reply) => {
    const customer = await customerService.findById(request.params.id);
    if (!customer) {
        return reply.status(404).send({ error: 'Customer not found' });
    }
    return customer;
});
fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' });
});
fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`server listening on ${address}`);
});
//# sourceMappingURL=asyncEasy.js.map