<template>
  <router-link
    v-if="to"
    :to="to"
  >
    <button
      class="underline-button"
      :class="{'light': light}"
    >
      <slot /><span class="period">.</span>
    </button>
  </router-link>
  <button
    v-else
    class="underline-button"
    :class="{'light': light}"
  >
    <slot /><span class="period">.</span>
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class UnderlineButton extends Vue {
  @Prop(String)
  readonly to?: string;

  @Prop(Boolean)
  readonly light?: string;
}
</script>

<style lang="scss" scoped>
a {
  display: contents;
  text-decoration: none;
}

.underline-button {
  font-size: 2rem;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  width: fit-content;
  font-family: inherit;
  padding: 0;
  color: var(--color-text);
  margin: 0;
  border: none;
  cursor: pointer;
  background: transparent;

  .period {
    margin-left: -4px;
    display: inline-block;
  }

  &:after {
    position: absolute;
    content: "";
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

  &.light {
    color: hsl(var(--color-neutral-white));
    &:after {
      background: hsl(var(--color-primary-700));
    }
  }
}
</style>
