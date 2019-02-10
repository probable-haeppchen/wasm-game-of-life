// A WebPack dependency graph that contains any WASM must all be imported asynchronously.
// (dynamically, via the `import()` routine)

// By injecting this bootstrap script, this requirement can be satisfied for all other modules.

// It is expected that this requirement will be lifted in the future.
// See: https://github.com/webpack/webpack/issues/6615

// Dynamically Import the entire WebPack graph
import("./index.js")
