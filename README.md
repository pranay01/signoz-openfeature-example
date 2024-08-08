## ReadMe

This example shows instrumenting a nodejs application with OpenFeature and using Launchdarkly as the feature flag backend provider

Run this using 
`OTEL_EXPORTER_OTLP_HEADERS="signoz-access-token=<SIGNOZ_INGESTION_KEY>" node -r ./tracing.cjs app.js`

### Status

- [x] Enable Feature flag using OpenFeature
- [x] Set up a feature flag backend system (setup LaunchDarkly)
- [x] Check the traces are being seen in SigNoz Cloud
- [ ] check how to add flag evaluation results via Opentelemetry Hooks

