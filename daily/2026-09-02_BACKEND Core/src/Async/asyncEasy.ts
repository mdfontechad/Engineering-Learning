
import Fastify from 'fastify';
import { CustomerService } from './usingInterface';
import type { Customer } from './interface';
const fastify = Fastify({logger:true});
const customerService = new CustomerService();

fastify.get<{ Params: { id: string } }>('/customers/:id', async (request, reply) => {
  // The await keyword unwraps Promise<Customer | null> into Customer | null
  const customer: Customer | null = await customerService.findById(request.params.id);

  if (!customer) {
    return reply.status(404).send({ error: 'Customer not found' });
  }

  return customer;
});

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
    fastify.log.info(`server listening on ${address}`)
  // Server is now listening on ${address}
})