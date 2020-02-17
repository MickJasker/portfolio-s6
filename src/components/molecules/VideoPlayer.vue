<template>
  <section class="video-player">
    <div class="thumbnail-preview">
      <video
        muted
        autoplay
        loop
      >
        <source :src="src">
      </video>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class VideoPlayer extends Vue {
  @Prop({
    type: String,
    required: true,
  })
  readonly src?: string;
}
</script>

<style lang="scss" scoped>
  .video-player {
    .thumbnail-preview {
      width: 100%;
      height: 100%;

      video {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
