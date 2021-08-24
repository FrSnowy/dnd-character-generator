import React from "react";
import * as T from "features/CharacterList/duck/types";
import * as Elements from "features/CharacterList/ui/elements";
import Character from "features/CharacterList/ui/components/Character";
import AddCharacter from "features/CharacterList/ui/components/AddCharacter";

const CharacterListView: React.FC<T.Props> = ({
  pending,
  characters,
  actions,
}) => {
  const charactersList = React.useMemo(
    () => characters.map((char) => <Character key={char.id} {...char} />),
    [characters]
  );

  return (
    <Elements.CharactersContainer>
      {charactersList}
      <AddCharacter />
    </Elements.CharactersContainer>
  );
};

export default CharacterListView;
