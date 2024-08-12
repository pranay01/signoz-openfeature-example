## ReadMe

This example shows instrumenting a nodejs application with OpenFeature and using Launchdarkly as the feature flag backend provider. Then using SigNoz to visualise the openfeature flags in span events

In bash:
`export OTEL_SERVICE_NAME="openfeature-example"`

Run this using 
`OTEL_EXPORTER_OTLP_HEADERS="signoz-access-token=<SIGNOZ_INGESTION_KEY>" node --require ./tracing.cjs app.js`

### Status

- [x] Enable Feature flag using OpenFeature
- [x] Set up a feature flag backend system (setup LaunchDarkly)
- [x] Check the traces are being seen in SigNoz Cloud
- [x] check how to add flag evaluation results via Opentelemetry Hooks
- [x] Visualising feature flags in SigNoz trace detail page, events section

### Current Issues
- [ ] SigNoz doesn't allow filtering based on span events in query builder currently.
- [ ] Openfeature sem conv only pass `flag_variant` and not `flag_value`

### Resources
- Specs fro Opentelemetry Hooks - https://github.com/open-feature/.github/issues/16
- NodeJS package for adding Otel Hooks - https://www.npmjs.com/package/@openfeature/open-telemetry-hooks

#### Screenshot

![openfeature-signoz](https://github.com/user-attachments/assets/c8315545-998f-40ec-a6fe-8dea392af9ac)

