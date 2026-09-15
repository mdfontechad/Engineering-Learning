import { buildApp } from "./app";
async function start() {
    const app = await buildApp();
    try {
        const port = parseInt(app.config.PORT, 10);
        const host = app.config.HOST;

        await app.listen({ port, host });
        app.log.info(`Server running on http://${host}:${port}`);
    } catch (err) {
        app.log.error(err)
        process.exit(1);
    }

}
start();