import React from "react";
import { Link } from "react-router-dom";
import * as T from "features/CharacterList/duck/types";
import Text from "shared/components/Text";
import * as Elements from "features/CharacterList/ui/components/Character/elements";

const Character: React.FC<T.Character> = (props) => (
  <Link to={`/characters/${props.id}`}>
    <Elements.Container bgImg={props.img}>
      <Elements.Mask />
      <Elements.NameContainer>
        <Text size="text" color="#fff" bold>
          {props.name}
        </Text>
      </Elements.NameContainer>
      <Elements.LevelAndClassContainer>
        <Text size="small-text" color="#fff">
          {props.class},&nbsp;
        </Text>
        <Text size="small-text" color="#fff">
          {props.level}
        </Text>
      </Elements.LevelAndClassContainer>
    </Elements.Container>
  </Link>
);

export default Character;
