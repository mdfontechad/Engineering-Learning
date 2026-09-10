# Fastify API — Fundamentals

## 1. Creating a Fastify Application

We start by importing Fastify:

```ts
import Fastify from 'fastify';
```

`Fastify` is the library's **default export**. In this case, it is a **factory function** that creates a Fastify application instance.

```ts
const fastify = Fastify({ logger: true });
```

We call the factory and receive an application instance.

The `logger: true` option enables Fastify's logging functionality.

### Mental model

```text
Fastify(options)
      ↓
Fastify application instance
      ↓
fastify.get()
fastify.post()
fastify.put()
fastify.delete()
fastify.listen()
```

---

## 2. Registering a Route

A route connects an HTTP method and URL to a function that should handle the request.

```ts
fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' });
});
```

This means:

> "When a client sends a `GET` request to `/`, execute this function."

The three important parts are:

```text
GET
 ↓
/
 ↓
handler function
```

### Important: the function isn't executed immediately

When we write:

```ts
fastify.get('/', handler);
```

we are **passing a function to Fastify**.

Fastify stores that function and executes it later when a matching request arrives.

This is called a **callback** or **handler function**.

---

## 3. Request and Reply

The handler receives two important objects:

```ts
function (request, reply) {
    // ...
}
```

### `request`

Contains information about the incoming HTTP request.

For example:

```text
HTTP method
URL
headers
query parameters
route parameters
body
```

### `reply`

Provides functionality for constructing the HTTP response.

For example:

```ts
reply.send({ hello: 'world' });
```

This sends the response body back to the client.

---

## 4. What Fastify Does Internally

Conceptually, the process looks like this:

```text
Client
  │
  │ GET /
  ▼
Fastify HTTP Server
  │
  │ Find matching route
  ▼
GET /
  │
  │ Retrieve handler
  ▼
handler(request, reply)
  │
  ▼
reply.send(...)
  │
  ▼
HTTP Response
```

The important idea is:

```text
Registration time
      ↓
fastify.get('/', handler)

Request time
      ↓
handler(request, reply)
```

The route registration and the handler execution happen at different moments.

---

## 5. How `get()` Can Be Conceptually Implemented

A router needs to remember which handler belongs to which route.

A simple conceptual representation could be:

```ts
const routes = [
    {
        method: 'GET',
        path: '/',
        handler: handler1
    },
    {
        method: 'GET',
        path: '/users',
        handler: handler2
    }
];
```

Then:

```ts
app.get('/', handler1);
```

could conceptually register the route:

```text
GET + / + handler1
```

Later, when:

```text
GET /users
```

arrives, the router finds the matching route and executes:

```ts
handler2(request, reply);
```

This is the fundamental idea behind **routing**.

Real frameworks use much more sophisticated implementations, but this is the core concept.

---

## 6. Method Chaining vs Callbacks

This:

```ts
fastify.get('/', handler);
```

is **not method chaining**.

Method chaining looks like:

```ts
object
    .methodA()
    .methodB()
    .methodC();
```

Instead, our Fastify example involves **passing a function as an argument**:

```ts
fastify.get('/', handler);
```

The function is a **callback**.

Fastify decides when to execute it.

---

# 7. Our API Architecture

For our Task Management API, we're going to use:

```text
HTTP Request
     ↓
   Route
     ↓
 Controller
     ↓
  Service
     ↓
 Repository
     ↓
   Data
```

### Route

Defines the HTTP endpoint.

```text
GET /tasks
POST /tasks
GET /tasks/:id
```

Its responsibility is primarily routing.

### Controller

Deals with HTTP concerns:

```text
Request
   ↓
Controller
   ↓
Response
```

It shouldn't contain our core business rules.

### Service

Contains **business logic**.

Examples:

```text
Complete a task
Find high-priority tasks
Calculate task statistics
```

### Repository

Deals with data access.

For our first version, this can be an in-memory array.

Later:

```text
Service
   ↓
Repository
   ↓
PostgreSQL
```

The service doesn't need to know how the data is stored.

---

# 8. Our Current Progress

We currently understand:

* Importing Fastify
* Creating a Fastify application
* Fastify factory functions
* Registering routes
* HTTP methods
* Route handlers
* Callbacks
* Request objects
* Reply objects
* Route registration vs execution
* Basic routing concepts
* Route → Controller → Service → Repository architecture

Our next step is to build:

```text
GET /tasks
```

and introduce the **Route → Controller → Service → Repository** flow in our actual project.
