import type { FastifyEnvOptions } from "@fastify/env";
export declare const envSchema: {
    type: string;
    required: string[];
    properties: {
        PORT: {
            type: string;
            default: string;
        };
        HOST: {
            type: string;
            default: string;
        };
        NODE_ENV: {
            type: string;
            default: string;
        };
    };
};
export declare const envOptions: FastifyEnvOptions;
declare module 'fastify' {
    interface FastifyInstance {
        config: {
            PORT: string;
            HOST: string;
            NODE_ENV: string;
        };
    }
}
//# sourceMappingURL=env.d.ts.map