import styled from 'styled-components';
import * as SharedElements from 'features/CharacterList/ui/elements';

export const Container = styled(SharedElements.SingleCharacterContainer)<{ bgImg?: string }>`
  position: relative;
  top: 0;
  left: 0;
  background-color: rgba(9, 21, 38, 0.07);
  border: 1px solid  rgba(9, 21, 38, 0.3);
  background-image: ${props => props.bgImg ? `url("${props.bgImg}")` : undefined};
`;

export const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(9, 21, 38, 0.85), white);
`;

export const NameContainer = styled.div`
  position: absolute;
  bottom: 30px;
  left: 8px;
  right: 8px;
`;

export const LevelAndClassContainer = styled.div`
  font-size: 12px;
  line-height: 16px;
  position: absolute;
  bottom: 8px;
  left: 8px;
  right: 8px;
`;