<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=DM+Serif+Display:400,400i|Montserrat:300,400,400i,600,700&display=swap');

:root {
  --color-primary-hue: 14;
  --color-primary-050: var(--color-primary-hue), 100%, 5%;
  --color-primary-100: var(--color-primary-hue), 100%, 10%;
  --color-primary-200: var(--color-primary-hue), 100%, 20%;
  --color-primary-300: var(--color-primary-hue), 100%, 30%;
  --color-primary-400: var(--color-primary-hue), 100%, 40%;
  --color-primary-500: var(--color-primary-hue), 100%, 50%;
  --color-primary-600: var(--color-primary-hue), 100%, 60%;
  --color-primary-700: var(--color-primary-hue), 100%, 70%;
  --color-primary-800: var(--color-primary-hue), 100%, 80%;
  --color-primary-900: var(--color-primary-hue), 100%, 90%;

  --color-neutral-hue: 0;
  --color-neutral-black: var(--color-neutral-hue), 0%, 0%;
  --color-neutral-050: var(--color-neutral-hue), 0%, 5%;
  --color-neutral-100: var(--color-neutral-hue), 0%, 10%;
  --color-neutral-200: var(--color-neutral-hue), 0%, 20%;
  --color-neutral-300: var(--color-neutral-hue), 0%, 30%;
  --color-neutral-400: var(--color-neutral-hue), 0%, 40%;
  --color-neutral-500: var(--color-neutral-hue), 0%, 50%;
  --color-neutral-600: var(--color-neutral-hue), 0%, 60%;
  --color-neutral-700: var(--color-neutral-hue), 0%, 70%;
  --color-neutral-800: var(--color-neutral-hue), 0%, 80%;
  --color-neutral-900: var(--color-neutral-hue), 0%, 90%;
  --color-neutral-white: var(--color-neutral-hue), 0%, 100%;

  --color-bg: hsl(--color-neutral-white);
  --color-text: hsl(--color-neutral-black);

  --font-heading: 'DM Serif Display', 'Montserrat', sans-serif;
  --font-base: 'Montserrat', sans-serif;
}

html {
  font-size: 8px;
  box-sizing: border-box;
  font-family: var(--font-base);
  color: hsl(var(--color-neutral-050));
  background: hsl(var(--color-neutral-1000));
  -webkit-tap-highlight-color: rgba(#000, 0);
}

body {
  margin: 0;
  padding: 0;
}

::selection {
  background: hsl(var(--color-primary-black));
  color: hsl(var(--color-neutral-white));
}

*,
*:before,
*:after {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-weight: normal;
  margin: 0;
  line-height: 1.5em;
}

ul,
ol {
  margin: 0;
  padding: 0;
}

img {
  display: block;
}

.highlight {
  color: hsl(var(--color-primary-500));
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: hsl(--color-neutral-black);
    --color-text: hsl(--color-neutral-white);
  }
}
</style>
