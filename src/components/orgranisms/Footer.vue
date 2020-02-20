<template>
  <footer class="footer">
    <h1>Mick Jasker</h1>
    <h2>2016 – {{ new Date().getFullYear() }}</h2>
  </footer>
</template>

<style scoped lang="scss">
  footer.footer {
    --color-bg: hsl(var(--color-neutral-100));
    --color-text: hsl(var(--color-neutral-800));

    background: var(--color-bg);
    color: var(--color-text);

    padding: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 3rem;
      font-family: var(--font-base);
    }

    h2 {
      font-size: 2rem;
      color: hsl(var(--color-neutral-600));
    }

    @media (prefers-color-scheme: dark) {
      --color-bg: hsl(var(--color-neutral-black));
      --color-text: hsl(var(--color-neutral-600));

      border-top: solid 4px hsl(var(--color-neutral-100));

      h2 {
        color: hsl(var(--color-neutral-400));
      }
    }
  }
</style>
