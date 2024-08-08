import express from 'express';
import { OpenFeature } from '@openfeature/server-sdk';
import { LaunchDarklyProvider } from '@launchdarkly/openfeature-node-server';

const app = express();
const port = 3000;

await OpenFeature.setProviderAndWait(new LaunchDarklyProvider("sdk-d1776acf-00f1-4290-bda2-824826a5916d"));
//sdk key for production environment

const client = OpenFeature.getClient();

const context = {
    targetingKey: "user-key-123abc", // Could also use "key" instead of "targetingKey".
};

// Use an async route handler
app.get('/', async (req, res) => {
    try {
        const flagValue = await client.getBooleanValue("test-feature-signoz", false, context);
        res.send(`Server ${flagValue} at http://localhost:${port}`);
    } catch (error) {
        console.error('Error evaluating feature flag:', error);
        res.status(500).send('Internal Server Error');
    }
});

async function main() {
    try {
        await new Promise((resolve) => {
            app.listen(port, () => {
                console.log(`Server listening at http://localhost:${port}`);
                resolve();
            });
        });

        // More await events can be added here
        // await anotherAsyncFunction();

    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Run the main function
main().catch(error => {
    console.error('Failed to run the application:', error);
    process.exit(1);
});