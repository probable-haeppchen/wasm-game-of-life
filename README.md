# Conway's “Game of Life” with Web Assembly and Rust

An implementation of the *Game of Life* ([John Horton Conway](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)) in **Rust**, running in ever-green web browsers through the power of **Web Assembly**.

This implementation is a realisation of a tutorial published in [*The Rust and WebAssembly Book*](https://rustwasm.github.io/docs/book/) (Aaron Turon).

## Development Environment

- The *Rust* tool-chain
- `wasm-pack`
- *Node.js* and `npm`
  - `yarn` (optional)

## Building and Serving

For convenience, `npm` scripts have been included in [`package.json`](./package.json) for building the browser content and serving it with `webpack-dev-server`.

Prior to executing any of the included scripts, install required packages from the `npm` repository using either of the following:

```
npm install
yarn install
```

The following four scripts are provided:

| Script |       |       |      |
| :---:  | :---: | :---: | :--- |
| `build` | build | `development` | Build *debug* or *development* artefacts to `./dist/`.
| `release` | build | `production` | Build *release* or *production* artefacts to `./dist/`.
| `serve` | `webpack-dev-server` | `development` | Build in *debug* or *development* mode and *serve* content on port `8080` with `webpack-dev-server`.
| `stage` | `webpack-dev-server` | `production` | Build in *release* or *production* mode and *serve* content on port `8080` with `webpack-dev-server`.

Any of the above scripts may be executed with either `npm` or `yarn`. For example:

```
npm run serve
yarn serve
```

## Cleaning up Build Artefacts

Build artefacts:

```
rm -r dist pkg target
```

Dependencies and dependency-lock files:

```
rm -rf node_modules yarn.lock Cargo.lock
```

----
[Copyright © 2019-2021 Stephen Martindale](./LICENSE)
