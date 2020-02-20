<template>
  <footer class="footer">
    <h1>Mick Jasker<sup /> ⁄ 2016 – {{ new Date().getFullYear() }}</h1>
    <h2>Alle rechten voorbehouden</h2>
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
  }
</style>
