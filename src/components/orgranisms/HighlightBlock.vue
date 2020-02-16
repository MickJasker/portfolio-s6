<template>
  <section class="highlight-block">
    <h1>Highlight Block</h1>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class HighlightBlock extends Vue {}
</script>

<style lang="scss" scoped>
.highlight-block {
  position: static;
}
</style>
