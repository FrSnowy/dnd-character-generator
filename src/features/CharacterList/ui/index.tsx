import React from 'react';
import * as T from 'features/CharacterList/types/types';
import * as Elements from 'features/CharacterList/ui/elements';
import Character from 'features/CharacterList/ui/components/Character';

const CharacterListView : React.FC<T.Props> = (props) => (
  <Elements.CharacterContainer>
    <Character img="" name="Test" />
  </Elements.CharacterContainer>
);

export default CharacterListView;