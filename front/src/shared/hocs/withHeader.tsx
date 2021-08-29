import Header from 'features/Header';
import { HeaderProps } from 'features/Header/types';
import React from 'react';
import Container from 'shared/components/Container';

export const withHeader = (headerProps?: HeaderProps) => <T,>(Wrapped: React.FC<T>) => (props: T) => (
  <React.Fragment>
    <Header {...headerProps || {}} />
    <Container direction="column">
      <Wrapped {...props} />
    </Container>
  </React.Fragment>
)