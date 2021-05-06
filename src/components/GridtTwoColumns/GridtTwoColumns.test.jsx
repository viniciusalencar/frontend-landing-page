import { screen } from '@testing-library/react';
import { GridtTwoColumns } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<GridtTwoColumns />', () => {
  it('should render two columns grid', () => {
    const { container } = renderTheme(<GridtTwoColumns {...mock} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
