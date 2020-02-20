<template>
  <div id="app">
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Footer from '@/components/orgranisms/Footer.vue';

@Component({
  components: {
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss" src="./assets/scss/base.scss" />
