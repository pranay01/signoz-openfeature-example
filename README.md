This example shows instrumenting a nodejs application with OpenFeature and using Launchdarkly as the feature flag backend provider

Run this using 
`OTEL_EXPORTER_OTLP_HEADERS="signoz-access-token=<SIGNOZ_INGESTION_KEY>" node -r ./tracing.js app.js`

To Do
- [] Check the traces are being seen in SigNoz Cloud
- [] check how to add flag evaluation results via Opentelemetry Hooks

