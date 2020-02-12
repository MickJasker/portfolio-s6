<template>
  <div class="style-guide">
    <section class="typeography style-section">
      <header>
        <h1>Typography</h1>
      </header>
      <main>
        <section class="headings">
          <h1 class="heading-huge">
            This is a Huge Heading
          </h1>

          <h1>Heading 1</h1>

          <h2>Heading 2</h2>

          <h3>Heading 3</h3>

          <article>
            <h1>Heading 1</h1>

            <h2>Article Heading 2</h2>
            <h3>Article Heading 3</h3>
          </article>
        </section>
      </main>
    </section>
    <section class="colors style-section">
      <header>
        <h1>Colors</h1>
      </header>
      <main>
        <section class="primary color-detail">
          <h1>Primary</h1>
          <div class="colors-row">
            <div
              v-for="(color, index) in primary"
              :key="`color-primary-${index}`"
              class="color"
              :class="`color-primary-${color.color}`"
            >
              {{ color.color }}
            </div>
          </div>
        </section>
        <section class="neutral color-detail">
          <h1>Neutral</h1>
          <div class="colors-row">
            <div
              v-for="(color, index) in neutral"
              :key="`color-neutral-${index}`"
              class="color"
              :class="`color-neutral-${color.color}`"
            >
              {{ color.color }}
            </div>
          </div>
        </section>
      </main>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class StyleGuide extends Vue {
  public primary = [
    {
      color: '050',
    },
    {
      color: '100',
    },
    {
      color: '200',
    },
    {
      color: '300',
    },
    {
      color: '400',
    },
    {
      color: '500',
    },
    {
      color: '600',
    },
    {
      color: '700',
    },
    {
      color: '800',
    },
    {
      color: '900',
    },
  ]

  public neutral = [
    {
      color: 'black',
    },
    {
      color: '050',
    },
    {
      color: '100',
    },
    {
      color: '200',
    },
    {
      color: '300',
    },
    {
      color: '400',
    },
    {
      color: '500',
    },
    {
      color: '600',
    },
    {
      color: '700',
    },
    {
      color: '800',
    },
    {
      color: '900',
    },
    {
      color: 'white',
    },
  ]
}
</script>

<style scoped lang="scss">
.style-guide {

  .style-section {
    margin-bottom: 8rem;

    header {
      max-width: 140rem;
      margin: 0 auto 8rem;

      h1 {
        width: fit-content;
        font-size: 8rem;

        &:after {
          content: '';
          display: block;
          width: 40%;
          min-width: 2rem;
          height: 1rem;
          background: hsl(var(--color-primary-500));
        }
      }
    }

    main {
      max-width: 140rem;
      margin: 0 auto;
    }

    &:not(:last-child) {
      margin-bottom: 20rem;
    }
  }

  .colors {
    .color-detail {
      &:not(:last-child) {
        margin-bottom: 5rem;
      }
    }

    .colors-row {
      display: flex;

      .color {
        flex-basis: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
        padding: 3rem 0;

        &.color-primary- {
          &050 {
            background: hsl(var(--color-primary-050));
            color: hsl(var(--color-primary-900));
          }

          &100 {
            background: hsl(var(--color-primary-100));
            color: hsl(var(--color-primary-900));
          }

          &200 {
            background: hsl(var(--color-primary-200));
            color: hsl(var(--color-primary-900));
          }

          &300 {
            background: hsl(var(--color-primary-300));
            color: hsl(var(--color-primary-900));
          }

          &400 {
            background: hsl(var(--color-primary-400));
            color: hsl(var(--color-primary-900));
          }

          &500 {
            background: hsl(var(--color-primary-500));
            color: hsl(var(--color-primary-900));
          }

          &600 {
            background: hsl(var(--color-primary-600));
            color: hsl(var(--color-primary-050));
          }

          &700 {
            background: hsl(var(--color-primary-700));
            color: hsl(var(--color-primary-050));
          }

          &800 {
            background: hsl(var(--color-primary-800));
            color: hsl(var(--color-primary-050));
          }

          &900 {
            background: hsl(var(--color-primary-900));
            color: hsl(var(--color-primary-050));
          }
        }
        &.color-neutral- {
          &black {
            background: hsl(var(--color-neutral-black));
            color: hsl(var(--color-neutral-white));
          }

          &050 {
            background: hsl(var(--color-neutral-050));
            color: hsl(var(--color-neutral-white));
          }

          &100 {
            background: hsl(var(--color-neutral-100));
            color: hsl(var(--color-neutral-white));
          }

          &200 {
            background: hsl(var(--color-neutral-200));
            color: hsl(var(--color-neutral-white));
          }

          &300 {
            background: hsl(var(--color-neutral-300));
            color: hsl(var(--color-neutral-white));
          }

          &400 {
            background: hsl(var(--color-neutral-400));
            color: hsl(var(--color-neutral-white));
          }

          &500 {
            background: hsl(var(--color-neutral-500));
            color: hsl(var(--color-neutral-white));
          }

          &600 {
            background: hsl(var(--color-neutral-600));
            color: hsl(var(--color-neutral-black));
          }

          &700 {
            background: hsl(var(--color-neutral-700));
            color: hsl(var(--color-neutral-black));
          }

          &800 {
            background: hsl(var(--color-neutral-800));
            color: hsl(var(--color-neutral-black));
          }

          &900 {
            background: hsl(var(--color-neutral-900));
            color: hsl(var(--color-neutral-black));
          }

          &white {
            background: hsl(var(--color-neutral-white));
            color: hsl(var(--color-neutral-black));
          }
        }
      }
    }
  }
}
</style>
