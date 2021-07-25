import React from 'react';
import PageContainer from 'shared/components/PageContainer';
import CharacterListController from 'features/CharacterList';

const CharactersPage : React.FC<{}> = () => (
  <PageContainer>
    <CharacterListController />
  </PageContainer>
);

export default CharactersPage;