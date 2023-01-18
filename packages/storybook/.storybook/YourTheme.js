// .storybook/YourTheme.js

import { create } from '@storybook/theming';

import imageFile from './assets/poly_logo.png';

export default create({
  base: 'light',
  brandTitle: 'My custom storybook',
  brandUrl: 'https://example.com',
  brandImage: imageFile,
  brandTarget: '_self',
});