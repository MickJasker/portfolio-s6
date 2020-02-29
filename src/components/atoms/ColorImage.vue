<template>
  <div class="gradient-map-image">
    <img
      :src="src"
      class="img"
      alt=""
    >
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ColorImage extends Vue {
  @Prop({
    type: String,
    required: true,
  })
  readonly src?: string;
}
</script>

<style lang="scss" scoped>
  .gradient-map-image {
    position: relative;
    width: fit-content;

    &:before {
      content: '';
      width: 100%;
      z-index: 1;
      top: 0;
      height: 100%;
      position: absolute;
      background: hsl(var(--color-primary-500));
      mix-blend-mode: screen;

      @media (prefers-color-scheme: dark) {
        mix-blend-mode: multiply;
      }
    }

    .img {
      width: 100%;
      filter: saturate(0);
      height: auto;
    }
  }
</style>
