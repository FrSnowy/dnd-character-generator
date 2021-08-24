import React from "react";
import View from "features/CharacterList/ui";
import useAction from "shared/hooks/useAction";
import connect from "features/CharacterList/connect";
import * as T from "features/CharacterList/duck/types";

const CharacterListController: React.FC<T.Props> = (props) => {
  useAction(props.actions.getCharacters);
  return <View {...props} />;
};

/**
 * Created characters list
 * @returns Grid view of created characters
 */
export default connect(CharacterListController);
