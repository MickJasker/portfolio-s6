<template>
  <div class="subtitle">
    <h2>{{ copy }}</h2>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Subtitle extends Vue {
  @Prop({
    type: String,
    required: true,
  })
  copy?: string;
}
</script>

<style lang="scss" scoped>
.subtitle {
  display: flex;
  align-items: center;

  h2 {
    font-size: 2rem;
    margin: 0;
  }

  &:after {
    content: '';
    margin-left: 2rem;
    width: 4rem;
    height: 2px;
    background: hsl(var(--color-primary-500));
  }

  @media screen and (min-width: 768px) {
    h2 {
      font-size: 3rem;
    }
  }
}
</style>
