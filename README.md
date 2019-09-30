# Hageveld UI

Implemented with [React](https://github.com/facebook/react) components following [Atomic Design](http://atomicdesign.bradfrost.com/).

## Installation

Requires a bundler with ES module support.

`yarn add @hageveld/ui styled-components`

Wrap your app in a `ThemeProvider` to use the included `light` theme.

```js
import { Button, light } from '@hageveld/ui';
import React from 'react';
import { ThemeProvider } from 'styled-components';

<ThemeProvider theme={light}>
  <Button>Button</Button>
</ThemeProvider>;
```

### Typeface

Our designs use the [Lato](http://www.latofonts.com/) and [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono) typefaces, which you will probably need to install in your app or site. There are several options depending on your requirements and build tooling:

- Use [typeface-lato](https://www.npmjs.com/package/typeface-lato) and [typeface-roboto-mono](https://www.npmjs.com/package/typeface-roboto-mono) to self-host your typefaces when using npm/yarn with Webpack or any other build tool with CSS and font loaders ([instructions](https://github.com/KyleAMathews/typefaces#how))
- Use [Google Fonts](https://fonts.google.com/?selection.family=Lato:400,700,900|Roboto+Mono) to load the fonts from a CDN (over the Internet) without any configuration (note that [Google collects some usage data](https://developers.google.com/fonts/faq#what_does_using_the_google_fonts_api_mean_for_the_privacy_of_my_users))
- Download [Lato](http://www.latofonts.com/) and [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono) directly if you need more control over font loading or if you only plan on using the fonts locally
