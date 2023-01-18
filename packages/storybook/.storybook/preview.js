export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

import { addParameters } from '@storybook/react';

addParameters({
  stylesheetToggle: {
    stylesheets: [
      {
        id: 'first',
        title: 'Blickpunkt:Film',
        url: 'bf.css',
      },
      {
        id: 'second',
        title: 'Musikwoche',
        url: 'mw.css',
      },
    ],
  },
});