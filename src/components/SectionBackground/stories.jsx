import { SectionBackground } from '.';
import { SectionContainer } from '../SectionContainer';
export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed officiis
          dolor illo molestias, facilis voluptas, rerum aspernatur a ipsam omnis
          tenetur eligendi animi mollitia, quidem ad alias cumque? Dicta, vitae!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
