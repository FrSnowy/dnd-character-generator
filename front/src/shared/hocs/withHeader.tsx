import Header from 'features/Header';
import React from 'react';
import Container from 'shared/components/Container';

export const withHeader = <T,>(Wrapped: React.FC<T>) => (props: T) => (
  <React.Fragment>
    <Header />
    <Container direction="column">
      <Wrapped {...props} />
    </Container>
  </React.Fragment>
)