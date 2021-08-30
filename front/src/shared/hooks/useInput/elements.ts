import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  &:not(:first-of-type) {
    margin-top: 16px;
  }
`;

export const Input = styled.input`
  margin-top: 4px;
  margin-bottom: 12px;
  width: 100%;
  font-size: 1em;
  line-height: 1.25;
  padding: 4px 8px;
`;