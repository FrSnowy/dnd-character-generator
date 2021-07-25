import styled from 'styled-components';
import * as SharedElements from 'features/CharacterList/ui/elements';

export const Container = styled(SharedElements.SingleCharacterContainer)`
  background-color: rgba(9, 21, 38, 0.07);
  border: 2px dashed  rgba(9, 21, 38, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
`;