<div>
  <img src="./.badges/badge-statements.svg" />
  <img src="./.badges/badge-branches.svg" />
  <img src="./.badges/badge-functions.svg" />
  <img src="./.badges/badge-lines.svg" />
</div>

# Install

```bash
$ yarn add @99mini/atom
```

# Usage

## import

import from `@99mini/atom` or `@99mini/atom/<component>`. You can do a default import using `atom/<component>`.

```tsx
import { Button } from "@99mini/atom";
import Badge from "@99mini/atom/Badge";
```

## Table of Contents

- [Button](#Button)
- [CheckBox](#CheckBox)
- [Skeleton](#Skeleton)
- [Progress](#Progress)
  - [LinearProgress](#LinearProgress)

## Button

### Default Button

```tsx
import { Button } from "@99mini/atom";

const App = () => {
  return <Button>Hello @99mini/atom/Button</Button>;
};
```

### Anchor Button

```tsx
import { Button } from "@99mini/atom";

const App = () => {
  return (
    <Button href={"https://github.com/99mini/frontend-libraries"}>
      {"Let use @99mini/<libraries>"}
    </Button>
  );
};
```

## CheckBox

## Skeleton

## Progress

### LinearProgress

# Dependency

[@99mini/utils](https://www.npmjs.com/package/@99mini/utils)
[@99mini/core](https://www.npmjs.com/package/@99mini/core)
