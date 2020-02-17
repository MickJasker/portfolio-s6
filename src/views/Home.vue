<template>
  <div class="home">
    <Hero
      subtitle="Portfolio Mick Jasker"
      class="hero"
      :bg-image="require('@/assets/images/berlin.jpg')"
      :call-to-actions="[
        {
          copy: 'Bekijk mijn portfolio',
          to: '/portfolio'
        }
      ]"
    >
      Semester <span class="highlight">6</span><br>
      <span class="highlight">Startup</span> Experience
    </Hero>
    <HighlightBlock
      title="Over dit laatste semester"
      :call-to-action="{
        to: '/',
        copy: 'Lees meer over dit semester'
      }"
      :media-block="{
        type: 'video',
        src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
      }"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis auctor lorem.
      Nullam quis ipsum nec orci porttitor mollis. Ut nec mi eu lacus bibendum fermentum.
      Integer hendrerit elit quis urna euismod, id tristique mi imperdiet. Ut a turpis
      sodales, feugiat ipsum ut, pulvinar nisi. Sed non placerat sem. Aliquam elementum
      ligula nec erat gravida commodo. Donec mattis est turpis. Aliquam condimentum,
      ex nec laoreet dignissim, odio enim aliquam mi, vel posuere felis tortor quis
      libero.
    </HighlightBlock>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Hero from '@/components/orgranisms/Hero.vue';
import HighlightBlock from '@/components/orgranisms/HighlightBlock.vue';

@Component({
  components: {
    Hero,
    HighlightBlock,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
  .home {
    min-height: 100vh;
  }
</style>
