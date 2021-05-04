import P from 'prop-types';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/meterial-outlined/Menu';
import { useState } from 'react';

export const Menu = ({ links = [], logoData }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <>
      <Styled.Button>
        <MenuIcon />
      </Styled.Button>
      <Styled.Container>
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired(),
};
