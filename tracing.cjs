/*instrumentation.js*/
// Require dependencies
const { NodeSDK } = require('@opentelemetry/sdk-node');
const { ConsoleSpanExporter } = require('@opentelemetry/sdk-trace-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');

const {
  getNodeAutoInstrumentations,
} = require('@opentelemetry/auto-instrumentations-node');


const exporterOptions = {
  url: 'https://ingest.eu.signoz.cloud:443/v1/traces'
  //url:'http://localhost:4318/v1/traces' //sending to otel-desktop-viewer
}

const sdk = new NodeSDK({
  //traceExporter: new ConsoleSpanExporter(),
  traceExporter: new OTLPTraceExporter(exporterOptions),
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();
