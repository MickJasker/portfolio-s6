<template>
  <article class="introduction-block">
    <main>
      <h1>{{ heading }}<span class="highlight">.</span></h1>

      <div class="content">
        <p>
          <slot />
        </p>
      </div>
    </main>
    <aside v-if="src">
      <ColorImage :src="src" />
    </aside>
  </article>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import ColorImage from '@/components/atoms/ColorImage.vue';

@Component({
  components: {
    ColorImage,
  },
})
export default class IntroductionBlock extends Vue {
  @Prop({
    type: String,
    required: true,
  })
  readonly heading?: string;

  @Prop(String)
  readonly src?: string;
}
</script>

<style lang="scss" scoped>
  .introduction-block {
    margin: 10rem 0 0;

    main {
      margin: 0 2rem;
      font-size: 2rem;

      p {
        font-size: 1em;
        margin: 3rem 0;
        color: hsl(var(--color-neutral-500));
      }
    }

    @media screen and (min-width: 768px) {
      display: flex;
      margin: 20rem 0 0 15vw;
      align-items: center;

      main {
        margin: 0 4rem 0 0;
        width: 110rem;

        p {

          @media (prefers-color-scheme: dark) {
            color: hsl(var(--color-neutral-600));
          }
        }
      }

      aside {
        width: fit-content;
      }
    }
  }
</style>
