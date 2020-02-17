<template>
  <section class="highlight-block">
    <main>
      <h1 class="title">
        {{ title }}
      </h1>
      <p class="copy">
        <slot />
      </p>
      <UnderlineButton
        :to="callToAction.to"
        light
      >
        {{ callToAction.copy }}
      </UnderlineButton>
    </main>
    <aside>
      <img
        v-if="mediaBlock.type === 'image'"
        :src="mediaBlock.src"
        :alt="mediaBlock.alt"
      >
      <VideoPlayer
        v-else-if="mediaBlock.type === 'video'"
        class="video-player"
        :src="mediaBlock.src"
      />
    </aside>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import UnderlineButton from '@/components/atoms/UnderlineButton.vue';
import VideoPlayer from '@/components/molecules/VideoPlayer.vue';

interface CallToAction {
  to: string;
  copy: string;
}

enum MediaType {
  video = 'video',
  image = 'image',
}

interface MediaBlock {
  src: string;
  type: MediaType;
}

@Component({
  components: {
    UnderlineButton,
    VideoPlayer,
  },
})
export default class HighlightBlock extends Vue {
  @Prop({
    type: String,
    required: true,
  })
  readonly title?: string;

  @Prop({
    type: Object,
    required: true,
  })
  readonly callToAction?: CallToAction;

  @Prop({
    type: Object,
    required: true,
  })
  readonly mediaBlock?: MediaBlock;
}
</script>

<style lang="scss" scoped>
.highlight-block {
  --color-text: hsl(var(--color-neutral-white));
  color: var(--color-text);

  main {
    padding: 5rem 2rem;
    background: hsl(var(--color-primary-500));

    .title {
      font-family: var(--font-base);
      font-size: 3rem;
      color: inherit;
      font-weight: 600;
    }

    .copy {
      font-size: 2rem;
      margin-bottom: 3rem;
      color: hsl(var(--color-primary-900));
    }
  }

  aside {
    width: 100%;
    filter: saturate(0);

     img {
       width: 100%;
       height: 100%;
       object-fit: cover;
     }

    .video-player {
      width: 100%;
      height: 100%;
    }
   }

  @media screen and (min-width: 768px) {
    margin-left: 15vw;
    display: flex;
    align-items: stretch;

    main {
      padding: 5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-basis: calc(10rem + 100ch);
    }

    aside {
      max-height: 60rem;
    }
  }
}
</style>
