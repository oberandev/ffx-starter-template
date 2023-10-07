# FFX starter template

This project was bootstrapped with [FFX starter template](https://github.com/oberandev/ffx-starter-template).

## Table of Contents

1. [Setup](#setup)
2. [Available Scripts](#available-scripts)
3. [Recommended libraries](#recommended-libraries)

## <a name="setup"></a>Setup

> [!NOTE]
> We recommend using Nix for development, however we understand that it may not be for everyone. You can safely run `pnpm rimraf nix .envrc*` to remove everything related to Nix and just stick with [nvm](https://github.com/nvm-sh/nvm).

1. Ensure you have [Nix](https://nixos.org/download.html) and [direnv](https://direnv.net/#basic-installation) configured
2. Run `cp envrc.example envrc` and configure any necessary env vars
3. Run `direnv allow`
4. Install dependecies with `pnpm install`

## <a name="available-scripts"></a>Available Scripts

In the project directory, you can run:

### `pnpm build`

Runs `esbuild` to bundle your config for publishing to Flatfile.

### `pnpm clean`

Removes all build artifacts.

### `pnpm compile`

Runs `tsc` to compile your code.

### `pnpm format`

Runs `prettier` to format your code.

### `pnpm lint`

Runs `eslint` to verify your code meets configured standards.

### `pnpm lint:fix`

Runs `eslint` to attempt to fix errors found violating configured standards.

### `pnpm test`

Runs `vitest` in watch mode.

### `pnpm test:coverage`

Runs `vitest` once (not in watch mode) and generates code coverage reports.

### `pnpm test:ui`

Runs `vitest` web server and opens coverage reports in your default browser.

## <a name="recommended-libraries"></a>Recommended libraries

- [@oberan/ffx-api](https://github.com/oberandev/ffx/tree/main/packages/ffx-api#readme)
- [@oberan/ffx-guards](https://github.com/oberandev/ffx/tree/main/packages/ffx-guards#readme)
- [@oberan/ffx-orm](https://github.com/oberandev/ffx/tree/main/packages/ffx-orm#readme)
- [@oberan/ffx-parser-address-geocodio](https://github.com/oberandev/ffx/tree/main/packages/ffx-parser-address-geocodio#readme)
- [@oberan/ffx-parser-ip](https://github.com/oberandev/ffx/tree/main/packages/ffx-parser-ip#readme)
- [@oberan/ffx-parser-mac](https://github.com/oberandev/ffx/tree/main/packages/ffx-parser-mac#readme)
- [@oberan/ffx-parser-uuid](https://github.com/oberandev/ffx/tree/main/packages/ffx-parser-uuid#readme)
