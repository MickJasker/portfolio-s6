<template>
  <section class="hero">
    <main>
      <Subtitle :copy="subtitle" />
      <h1 class="title heading-huge">
        <slot /><span class="highlight">.</span>
      </h1>
      <p
        v-if="copy"
        class="copy"
      >
        {{ copy }}
      </p>
      <ul
        v-if="callToActions"
        class="call-to-actions"
      >
        <li
          v-for="(cta, index) in callToActions"
          :key="`cta-hero-name=${cta.to}-cta-id=${index}`"
        >
          <router-link :to="cta.to">
            {{
              cta.copy
            }}.
          </router-link>
        </li>
      </ul>
    </main>

    <div class="hero-image">
      <img
        :src="bgImage"
        alt="Hero background"
      >
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Subtitle from '@/components/molecules/Subtitle.vue';

interface CallToAction {
  copy: string;
  to: string;
}

@Component({
  components: {
    Subtitle,
  },
})
export default class Hero extends Vue {
  @Prop({
    type: String,
    required: true,
  })
  readonly subtitle?: string;

  @Prop(String)
  readonly copy?: string;

  @Prop(Array)
  readonly callToActions?: CallToAction[];

  @Prop(String)
  readonly bgImage?: string;
}
</script>

<style lang="scss" scoped>
  .hero {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    main {
      padding: 15rem 2rem;
    }

    .copy {
      font-size: 2rem;
      max-width: 60rem;
    }

    .call-to-actions {
      a {
        font-size: 3rem;
      }
    }

    .call-to-actions {
      list-style: none;

      li {
        width: fit-content;
      }

      a {
        font-size: 2rem;
        font-weight: 600;
        text-decoration: none;
        color: inherit;
        position: relative;
        width: fit-content;

        &:after {
          position: absolute;
          content: '';
          transition: 0.3s ease-out;
          display: block;
          bottom: -0.5rem;
          height: 0.5rem;
          width: 40%;
          background: hsl(var(--color-primary-500));
        }

        &:hover {
          &:after {
            width: 100%;
          }
        }
      }
    }

    .hero-image {
      position: absolute;
      height: 100%;
      top: 0;
      z-index: -1;
      width: 100%;

      &:before {
        content: '';
        width: 100%;
        z-index: 1;
        top: 0;
        height: 100%;
        position: absolute;//noinspection CssInvalidFunction
        background: linear-gradient(rgba(#000, 0), ease-in-out, #fff);

        @media (prefers-color-scheme: dark) {
          //noinspection CssInvalidFunction
          background: linear-gradient(rgba(#000, 0), ease-in-out, #000);
        }
      }

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
        filter: saturate(0);
      }
    }

    @media screen and (min-width: 768px) {

      main {
        padding: 30rem 0 30rem 15vw;
        filter: drop-shadow(0 0 2rem hsla(var(--color-bg)));
      }

      .hero-image {
        &:before {
          //noinspection CssInvalidFunction
          background: linear-gradient(270deg, rgba(#000, 0), ease-in-out, #fff);

          @media (prefers-color-scheme: dark) {
            //noinspection CssInvalidFunction
            background: linear-gradient(270deg, rgba(#000, 0), ease-in-out, #000);
          }
        }
      }
    }
  }
</style>
