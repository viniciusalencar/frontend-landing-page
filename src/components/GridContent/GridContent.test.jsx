import { screen } from '@testing-library/react';
import { GridContent } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<GridContent />', () => {
  it('should render grid light content ', () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(container).toMatchSnapshot();
  });

  // it('should render grid dark content', () => {
  //   const { container } = renderTheme(
  //     <GridContent {...mock} background={undefined} />,
  //   );
  //   expect(container).toMatchSnapshot();
  // });
});
