# Conway's “Game of Life” with Web Assembly and Rust

An implementation of the *Game of Life* ([John Horton Conway](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)) in **Rust**, running in ever-green web browsers through the power of **Web Assembly**.

This implementation is a realisation of a tutorial published in [*The Rust and WebAssembly Book*](https://rustwasm.github.io/docs/book/) (Aaron Turon).

## Building the Crate with *Rust* and `wasm-pack`

Although this step is automatically handled by `wasm-pack-plugin` in the `webpack` build, it is helpful to manually verify that the *Rust* crate builds correctly and that `wasm-pack` produces sane output prior to invoking `webpack`.

```
wasm-pack build --dev
```

or

```
wasm-pack build --release
```

## Installing Prerequisites from the `npm` Repositories

```
yarn install
```

## Building the Browser Content with `webpack`

This optional step is useful to verify that the `webpack` build passes.

```
npx webpack --mode development
```

or

```
npx webpack --mode production
```

## Serving with `webpack-dev-server`

```
npx webpack-dev-server --mode development
```

or

```
npx webpack-dev-server --mode production
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
