import React from 'react';
import Text from 'shared/components/Text';
import * as Elements from 'pages/characters/elements';
import PageContainer from 'shared/components/PageContainer';
import CharacterListController from 'features/CharacterList';
import getLocale from 'config/locale';

const CharactersPage : React.FC<{}> = () => (
  <PageContainer direction="column">
    <Elements.TitleContainer>
      <Text size="title" bold color="rgb(9, 21, 52)">
        {getLocale('characters', 'en', true)}
      </Text>
    </Elements.TitleContainer>
    <CharacterListController />
    <Elements.Separator />
  </PageContainer>
);

export default CharactersPage;