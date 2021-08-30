import React from 'react';
import Container from 'shared/components/Container';
import LanguageToggler from './components/LanguageToggler';
import * as Elements from './elements';
import { HeaderProps } from './types';

/**
 * Component represents SPA header with language toggler and nav
 * @param fixed boolean. Position is set to fixed while value is true
 * @returns Header view
 */
const Header : React.FC<HeaderProps> = ({ fixed }) => (
  <Elements.Container fixed={fixed}>
    <Container direction="row">
      <Elements.InnerContainer>
        <Elements.Name>
          D&amp;D Character Generator
        </Elements.Name>
        <Elements.Articles>

        </Elements.Articles>
        <Elements.Controls>
          <LanguageToggler />
        </Elements.Controls>
      </Elements.InnerContainer>
    </Container>
  </Elements.Container>
)

export default Header;