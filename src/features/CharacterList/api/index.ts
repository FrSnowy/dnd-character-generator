import * as T from 'features/CharacterList/types/types';

export const getCharacters = () : Array<T.Character> => {
  const characterList = localStorage.getItem('character-list');
  if (!characterList) return [];
  return JSON.parse(characterList) as Array<T.Character>;
}