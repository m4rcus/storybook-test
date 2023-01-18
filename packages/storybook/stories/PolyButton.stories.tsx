import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PolyButton } from './PolyButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/PolyButton',
  component: PolyButton,
  argTypes: {
    color: { control: 'select'}
  }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//  argTypes: {
//    backgroundColor: { control: 'color' },
//  },
} as ComponentMeta<typeof PolyButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PolyButton> = (args) => <PolyButton {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  variant: 'contained',
  color: 'primary',
  label: 'Contained',
  size: 'medium',
  disabled: false,
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  color: 'primary',
  label: 'Outlined',
  size: 'medium',
  disabled: false,
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  color: 'primary',
  label: 'Text',
  size: 'medium',
  disabled: false,
};
