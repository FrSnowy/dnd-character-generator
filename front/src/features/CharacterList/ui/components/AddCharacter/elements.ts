import styled from "styled-components";
import * as SharedElements from "features/CharacterList/ui/elements";

export const IconContainer = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 2px solid rgba(9, 21, 38, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 32px;
  line-height: 32px;
  color: rgba(9, 21, 38, 0.3);
  transition: border 125ms ease-in-out, color 125ms ease-in-out;
`;

export const Container = styled(SharedElements.SingleCharacterContainer)`
  background-color: rgba(9, 21, 38, 0.07);
  border: 2px dashed rgba(9, 21, 38, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border 125ms ease-in-out;

  &:hover {
    border: 2px dashed rgba(9, 21, 38, 0.6);

    ${IconContainer} {
      border: 2px solid rgba(9, 21, 38, 0.6);
      color: rgba(9, 21, 38, 0.6);
    }
  }
`;
