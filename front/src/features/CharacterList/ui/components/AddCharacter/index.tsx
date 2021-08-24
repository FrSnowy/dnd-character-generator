import React from "react";
import { Link } from "react-router-dom";
import * as Elements from "features/CharacterList/ui/components/AddCharacter/elements";

const AddCharacter: React.FC<{}> = () => (
  <Link to="/characters/add">
    <Elements.Container>
      <Elements.IconContainer>
        <span>+</span>
      </Elements.IconContainer>
    </Elements.Container>
  </Link>
);

export default AddCharacter;
