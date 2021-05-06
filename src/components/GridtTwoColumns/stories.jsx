import { GridtTwoColumns } from '.';
import mock from './mock';

export default {
  title: 'GridtTwoColumns',
  component: GridtTwoColumns,
  args: mock,
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridtTwoColumns {...args} />
    </div>
  );
};
