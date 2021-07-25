import styled from 'styled-components';

export const CharactersContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 24px;
`;

export const SingleCharacterContainer = styled.div`
  width: 100%;
  height: 200px;
  color: #fff;
  transition: box-shadow 125ms ease-in-out;

  & > * {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    box-shadow: 2px 5px 5px rgb(0, 0, 0, 0.35);
  }
`;