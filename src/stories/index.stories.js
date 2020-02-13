/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions';
import MyButton from '../components/MyButton.vue';

export default {
  component: MyButton,
  title: 'Button',
};

export const withText = () => ({
  components: { MyButton },
  template: '<my-button @click="action">Hello Button</my-button>',
  methods: { action: action('clicked') },
});
