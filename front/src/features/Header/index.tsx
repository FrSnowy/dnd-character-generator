import React from 'react';
import Container from 'shared/components/Container';
import * as Elements from './elements';
import { HeaderProps } from './types';

const Header : React.FC<HeaderProps> = ({ fixed }) => {
  return (
    <Elements.Container fixed={fixed}>
      <Container direction="row">
        <Elements.Name>
          D&amp;D Character Generator
        </Elements.Name>
        <Elements.Articles>
          
        </Elements.Articles>
        <Elements.Controls>

        </Elements.Controls>
      </Container>
    </Elements.Container>
  )
}

export default Header;