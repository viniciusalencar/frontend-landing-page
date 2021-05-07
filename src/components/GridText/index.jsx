import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridText = ({ title, description, grid, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading size="huge" uppercase background={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        {grid.map((element) => (
          <Styled.GridElement key={element.title}>
            <Heading size="medium" background={background} as="h3">
              {element.title}
            </Heading>
            <TextComponent>{element.description}</TextComponent>
          </Styled.GridElement>
        ))}
        <Styled.Grid></Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridText.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({ title: P.string.isRequired, description: P.string.isRequired }),
  ).isRequired,
  background: P.bool,
};
