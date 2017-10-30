# EcmaScript 6

## Transpiler

A **transpiler** reads code written in one language and produces the
equivalent code in another.

## Why do we need a transpiler?

Most browsers does not support new JS features. Hence **transpilers**
convert the **new-featured code** to **old-fashioned** one.

### Babel

Babel is a **transpiler** for converting **ES6** to **old JavaScript**.

## Module Bundler

A module bundler will gather all of your assets inside a project
and packages them into small bundles.

### Webpack

webpack is a **module bundler** for modern JavaScript applications.
When webpack processes your application, it recursively builds a
dependency graph that includes every module your application needs,
then packages all of those modules into a small number of bundles

You need to understand four concepts of **Webpack**:

1. Entry
2. Output
3. Loaders
4. Plugins

## Polyfill

A polyfill, or polyfiller, is a piece of code (or plugin)
that provides the technology that you, the developer,
expect the browser to provide natively.

# Modules Used in This Repository

babel-core => has core features to transpile ES6 code old JS code.
babel-loader => is doing transpiling job.
babel-preset-es2015 => this defines what language is used in repo.
babel-polyfill =>
webpack-dev-server => does automatic load when code is updated
