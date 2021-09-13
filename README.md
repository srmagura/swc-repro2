# swc-repro2

Demonstrates an issue with swc not transpiling a dependency.

This repository uses Yarn workspaces with Yarn v3. `package-b` depends on `package-a` which exports `testVariable`.
`package-b` has a single test which imports `testVariable` and checks that it is defined.

`package-a` is not pre-transpiled. It is up to the Jest transformer to transpile it into a CommonJS module.

## Instructions

1. Run `yarn` to install packages.
2. `cd package-b`
3. Run `yarn test --clearCache; yarn test`. This uses `@swc/jest` and fails with "SyntaxError: Unexpected token 'export'".
4. Comment out the `transform` line in `package-b/jest.config.js`. This makes Jest use `babel-jest` instead of `@swc/jest`.
5. Run `yarn test --clearCache; yarn test` again. This time it succeeds.

## Test Environment

Windows 10, Node 14.17.6
