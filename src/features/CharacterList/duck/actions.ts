import { actionTypes } from './constants';
import { localStorage } from 'config/data';
import * as T from 'features/CharacterList/duck/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCharacters = createAsyncThunk<Array<T.Character>, void>(
	actionTypes.GET_CHARACTERS,
	async () => await localStorage.getCharacterList(),
);