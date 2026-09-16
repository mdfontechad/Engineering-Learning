export const envSchema = {
    type: 'object',
    required: ['PORT', 'HOST'],
    properties: {
        PORT: { type: 'string', default: '3000' },
        HOST: { type: 'string', default: '0.0.0.0' },
        NODE_ENV: { type: 'string', default: 'development' },
    },
};
export const envOptions = {
    schema: envSchema,
    dotenv: true,
    data: process.env,
};
//# sourceMappingURL=env.js.map