import * as actions from "features/CharacterList/duck/actions";
import * as T from "features/CharacterList/duck/types";
import { createReducer, PayloadAction } from "@reduxjs/toolkit";

const initialState: T.State = {
  pending: true,
  characters: [],
};

export default createReducer(initialState, {
  [actions.getCharacters.pending.type]: (state: T.State) =>
    void (state.pending = true),
  [actions.getCharacters.rejected.type]: (state: T.State) =>
    void (state.pending = false),
  [actions.getCharacters.fulfilled.type]: (
    state: T.State,
    action: PayloadAction<Array<T.Character>>
  ) => {
    state.pending = false;
    state.characters = action.payload;
  },
});
