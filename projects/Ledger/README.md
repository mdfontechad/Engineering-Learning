Phase 1–7 alone will already make you substantially stronger as a backend developer.

PHASE 0 — Engineering Foundation
🎯 Objective

Understand exactly what we're building and establish a professional development environment.

Technologies
Node.js
npm
TypeScript
Git
Fastify
VS Code
tsx
ESLint
Prettier
Concepts
Node.js runtime
npm/package.json
modules
ESM
TypeScript compilation
tsconfig
development vs production
environment variables
Git workflow
project structure
TiendaControl

Initial repository:

tiendacontrol/
│
├── src/
│   └── server.ts
│
├── tests/
├── package.json
├── tsconfig.json
├── .env
├── .gitignore
└── README.md
Teacher checkpoint

You should be able to explain:

What happens from npm run dev until Fastify starts listening on port 3000?

PHASE 1 — TypeScript Fundamentals

Now we deliberately slow down.

Before building complicated APIs, we make sure you actually understand the language.

TypeScript

You'll learn:

primitive types
arrays
objects
interfaces
type aliases
functions
optional properties
unions
literals
enums — and why we don't necessarily need them
type inference
narrowing
unknown
any
null
undefined
generics
utility types
modules
imports/exports
async/await
Promises
error typing
Then progressively:
TypeScript
    ↓
Functions
    ↓
Objects
    ↓
Interfaces
    ↓
Generics
    ↓
Composition
    ↓
Async programming
    ↓
Error handling
TiendaControl

We'll create the first domain concepts:

Customer
Product
Sale
Payment

But initially they will just be TypeScript models.

For example, conceptually:

Customer
├── id
├── name
├── phone
└── notes

And we'll discuss why debt shouldn't simply be a mutable property.

That becomes our first serious domain-design lesson.

PHASE 2 — HTTP + Fastify

Now we turn TypeScript into an API.

Learn
HTTP
request/response
methods
status codes
headers
body
URL parameters
query parameters
JSON
REST
routing
callbacks
middleware/hooks
Fastify plugins

You'll understand things like:

GET /customers
GET /customers/123
POST /customers
PATCH /customers/123
DELETE /customers/123
TiendaControl milestone

Our first real feature:

GET /customers

Then:

POST /customers
GET /customers/:id

But we won't dump everything into server.ts.

PHASE 3 — API Architecture

This is where our earlier architecture becomes real.

HTTP
 │
 ▼
Route
 │
 ▼
Controller
 │
 ▼
Service
 │
 ▼
Repository
 │
 ▼
Database
You'll learn
Separation of concerns
Single Responsibility Principle
Dependency inversion
dependency injection
interfaces
DTOs
domain models
mapping
abstractions
composition
Project structure
src/
├── server.ts
│
├── routes/
│   └── customers.ts
│
├── controllers/
│   └── customer.controller.ts
│
├── services/
│   └── customer.service.ts
│
├── repositories/
│   └── customer.repository.ts
│
├── models/
│   └── customer.ts
│
├── schemas/
│   └── customer.schema.ts
│
├── plugins/
└── config/

At first:

Repository → Array<Customer>

Later:

Repository → PostgreSQL

And the Service shouldn't care.

That's our first introduction to real software architecture.

PHASE 4 — Validation & Error Handling

A production API cannot assume users send good data.

Learn
schema validation
DTOs
runtime validation vs compile-time types
custom errors
error propagation
HTTP error mapping
centralized error handling
Fastify schemas
Zod/TypeBox and when to use each

Important lesson:

TypeScript protects us during development. It does not validate data arriving over HTTP.

TiendaControl

For example:

POST /customers

should reject things like:

{
  "name": 123
}

or:

{
  "name": ""
}

We'll make the API tell the difference between:

malformed request
resource not found
business rule violation
unexpected server error
PHASE 5 — PostgreSQL

Now our application gets a real database.

Technology

PostgreSQL

Learn
relational databases
tables
primary keys
foreign keys
constraints
NULL
indexes
normalization
joins
aggregation
transactions
isolation
migrations
connection pools
query performance

And SQL.

Not just ORM syntax.

You'll write SQL yourself.

TiendaControl

First database:

customers

Then:

products
sales
sale_items
payments

We'll introduce migrations and a proper repository implementation.

PHASE 6 — Real Domain Modeling

This is one of the most important phases.

We stop thinking:

"What fields does my database table have?"

and start thinking:

"What rules does this business have?"

For example:

Customer
     │
     ├── Credit Sale
     ├── Credit Sale
     ├── Payment
     └── Payment

Instead of:

Customer.debt = 25000

we can derive:

20,000
+15,000
-10,000
=25,000

This introduces:

domain invariants
immutable financial records
ledgers
state transitions
auditability
derived state
business rules

This is where you'll start thinking like a backend engineer rather than an API coder.

PHASE 7 — Testing

Now we make sure our system actually works.

Technology

Likely:

Vitest
Fastify testing utilities
PostgreSQL test database
Learn
Unit tests
Integration tests
API tests
Database tests

Then:

mocks
stubs
test doubles
dependency injection for testing
test isolation
fixtures
factories
TDD
business-rule testing
TiendaControl

We test things such as:

A customer cannot exceed their credit limit.

A payment cannot exceed the outstanding balance, depending on our business rule.

A sale must have at least one item.

Stock cannot become negative unless explicitly allowed.

Testing becomes part of the architecture rather than something we add at the end.

PHASE 8 — Authentication & Authorization

Now multiple people can use TiendaControl.

Learn
authentication
authorization
password hashing
JWT
refresh tokens
sessions
RBAC
permissions
tenant isolation
security boundaries

We'll eventually have something conceptually like:

Organization / Store
       │
       ├── Owner
       ├── Manager
       └── Cashier

A cashier shouldn't necessarily be able to:

DELETE /products

or modify financial records.

PHASE 9 — Inventory

Now we attack one of TiendaControl's central problems.

Domain
Product
Category
Inventory
StockMovement
Supplier

We'll implement:

Purchase
    ↓
Stock increases

Sale
    ↓
Stock decreases

Then:

low-stock alerts
reorder points
expiration dates
inventory history
margins

This will introduce more sophisticated relational modeling.

PHASE 10 — Transactions & Concurrency

🔥 Major backend engineering milestone.

Imagine two cashiers sell the last Coke simultaneously.

Both requests see:

stock = 1

Both attempt:

stock = stock - 1

Now what?

This introduces:

race conditions
database transactions
atomicity
isolation levels
optimistic locking
pessimistic locking
idempotency
unique constraints
consistency

We'll make the financial/inventory side correct under concurrency.

This is a huge step toward senior-level backend thinking.

PHASE 11 — Offline-First Architecture

Now we tackle what makes TiendaControl special.

The store must continue operating without Internet.

Conceptually:

           INTERNET
              │
              ▼
       ┌──────────────┐
       │ Cloud API    │
       │ PostgreSQL   │
       └──────┬───────┘
              ▲
              │ Sync
              ▼
       ┌──────────────┐
       │ Local Store  │
       │ SQLite       │
       └──────────────┘
              │
              ▼
           Cashier
Learn
local persistence
synchronization
UUIDs
client timestamps
idempotency
conflict resolution
eventual consistency
retry strategies
immutable events
synchronization protocols

This is where distributed-systems concepts begin appearing naturally.

PHASE 12 — Events & Background Jobs

Some operations shouldn't block the cashier.

Example:

Sale completed
      │
      ├── Update inventory
      │
      ├── Record payment
      │
      └── Queue electronic invoice
                    │
                    ▼
              DIAN process

We'll learn:

asynchronous processing
queues
workers
retries
dead-letter queues
idempotent consumers
events
eventual consistency

Possible technologies later:

Redis
BullMQ
RabbitMQ

We won't choose prematurely.

PHASE 13 — Performance & Scalability

Now we ask:

What happens when 1 store becomes 1,000 stores?

Learn:

Big-O in practical backend development
database indexes
query optimization
pagination
caching
connection pools
N+1 problems
Redis
rate limiting
load balancing
horizontal scaling
stateless services

We'll benchmark things rather than blindly optimizing.

PHASE 14 — Security & Observability

Production systems need to tell us what's happening.

Security
OWASP concepts
injection
authentication vulnerabilities
authorization bugs
secrets
CORS
security headers
rate limiting
input validation
sensitive data handling
Observability
structured logging
request IDs
metrics
health checks
readiness/liveness
tracing
error monitoring

You'll learn to answer:

"The cashier says the sale failed. What actually happened?"

without guessing.

PHASE 15 — Docker + CI/CD + Deployment

Now we make the system deployable.

Technologies
Docker
Docker Compose
GitHub/GitLab CI
PostgreSQL containers
environment configuration
cloud deployment

Pipeline:

git push
   ↓
CI
   ↓
Lint
   ↓
Type check
   ↓
Tests
   ↓
Build
   ↓
Docker image
   ↓
Deploy

This connects backend development with DevOps fundamentals.

PHASE 16 — Advanced TypeScript

Only after you've used TypeScript extensively will we go deep.

You'll learn:

advanced generics
conditional types
mapped types
template literal types
type inference
keyof
typeof
indexed access types
discriminated unions
type guards
branded types
satisfies
advanced utility types
declaration files
library design

And importantly:

When advanced TypeScript improves a system — and when it just makes the code clever.

PHASE 17 — Advanced Architecture

Now we revisit architecture with much more experience.

You'll study:

Clean Architecture
Infrastructure
     ↓
Application
     ↓
Domain
Hexagonal Architecture
        API
         │
         ▼
    Application
      /     \
     ▼       ▼
Database   External API

Then:

Ports & adapters
CQRS
domain events
event-driven architecture
outbox pattern
repositories
factories
strategies
dependency inversion
bounded contexts

And eventually:

When NOT to use these patterns.

That's equally important.

PHASE 18 — Production TiendaControl

Finally we bring everything together.

Potential architecture:

                    ┌──────────────┐
                    │    Client    │
                    │ Offline POS  │
                    └──────┬───────┘
                           │
                       Sync API
                           │
                           ▼
                  ┌─────────────────┐
                  │    Fastify API  │
                  └────────┬────────┘
                           │
            ┌──────────────┼──────────────┐
            ▼              ▼              ▼
       Customers       Inventory       Sales
            │              │              │
            └──────────────┼──────────────┘
                           ▼
                      PostgreSQL
                           │
             ┌─────────────┴─────────────┐
             ▼                           ▼
           Redis                    Job Queue
                                         │
                                         ▼
                              Electronic Invoicing

At this point you're no longer simply learning:

"How do I make a Fastify API?"

You're learning:

How do I design, build, test, secure, operate, and evolve a real backend system?

🧑‍🏫 How I'll Teach You

This is important because I don't want to turn this into "ChatGPT writes the project for Maicol."

For every milestone we'll use this cycle:

1. Concept

I'll explain the underlying engineering concept.

2. Why TiendaControl needs it

We'll connect the concept to an actual business problem.

3. Design

We'll decide the architecture before coding.

4. You think

I'll ask you questions such as:

Where should this logic live?

Should this be a Controller or Service responsibility?

What happens if two requests arrive simultaneously?

5. You implement

I'll give you hints or small examples rather than immediately giving you the finished implementation.

6. Code review

You show me your code.

I'll review:

correctness
TypeScript quality
architecture
naming
complexity
security
edge cases
maintainability
7. Refactor

We improve it.

8. Engineering lesson

I'll explicitly tell you:

"This is the concept you should take away from this exercise."

📌 Our "Save Point" System

This is especially important for your concern about an AI losing context.

Every milestone will have a unique identifier.

For example:

TC-00   Project setup
TC-01   TypeScript fundamentals
TC-02   Fastify + HTTP
TC-03   Customer GET endpoint
TC-04   Customer POST endpoint
TC-05   API architecture
TC-06   Validation
TC-07   Error handling
TC-08   PostgreSQL
...

And each step will have a status:

[ ] Not started
[~] In progress
[x] Completed
Example
CURRENT MILESTONE
TC-03 — GET /customers

Phase: API Fundamentals
Status: [~] In progress

Goal:
Build GET /customers using:

Route
  ↓
Controller
  ↓
Service
  ↓
Repository
  ↓
In-memory data

Concepts:
- HTTP GET
- Fastify routing
- callbacks
- TypeScript interfaces
- dependency flow

Then, if you ever start a new conversation, you can simply tell the AI:

"Continue TiendaControl from TC-03."

And give it the milestone information if necessary.

🎯 The Rule for Progression

We do not advance because the calendar says so.

We advance when you can explain the concept.

For example, before leaving our first routing milestone, you should be able to explain:

Why does fastify.get() receive a callback?

When is that callback executed?

Where do request and reply come from?

Why does TypeScript know their types?

What happens between HTTP request and handler execution?

If you can't explain it yet, we stay there.

That's how we'll turn this from a coding tutorial into actual engineering knowledge.

🚀 Where We Are Right Now

We're currently here:

PHASE 0
████████████████████░  Setup
                         ↓
PHASE 1
██████░░░░░░░░░░░░░░  TypeScript
                         ↓
PHASE 2
████░░░░░░░░░░░░░░░░  Fastify / HTTP
                         ↓
PHASE 3
░░░░░░░░░░░░░░░░░░░░  Architecture

And specifically:

TC-02 — Understanding Fastify + HTTP + TypeScript

You've already successfully launched the Hello World Fastify server.

So we don't need to restart from npm init. We'll use what you've already built and move forward deliberately.

Next milestone

TC-03 — Build GET /customers

But before writing the endpoint, I'll make you design the flow:

GET /customers
      ↓
   Route
      ↓
 Controller
      ↓
   Service
      ↓
 Repository
      ↓
 In-memory customers

Then we'll implement it piece by piece.

This roadmap is our curriculum; TiendaControl is the laboratory. As we progress, I'll maintain the current milestone and make sure we don't jump ahead just because we know a more advanced technique exists.