import { AsyncThunk } from "@reduxjs/toolkit";

export type Character = {
  img: string,
  name: string,
};

export type State = {
  pending: boolean,
  characters: Array<Character>,
};

export type SelfActions = {
  getCharacters: AsyncThunk<Array<Character>, void, {}>,
};

export type Actions = {
  actions: SelfActions,
};

export type Props = State & Actions;