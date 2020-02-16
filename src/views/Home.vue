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
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Hero from '@/components/orgranisms/Hero.vue';

@Component({
  components: {
    Hero,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
  .hero {
  }
</style>
