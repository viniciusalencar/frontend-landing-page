import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Esse aliquam porro nemo! Ab ad ipsa magnam consequatur quas
      dolores! Unde molestiae in neque odit dolore quam debitis
      perspiciatis blanditiis architecto?
    `,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
