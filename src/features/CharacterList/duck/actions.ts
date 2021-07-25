import { actionTypes } from './constants';
import * as api from 'features/CharacterList/api';
import * as T from 'features/CharacterList/types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCharacters = createAsyncThunk<Array<T.Character>, void>(
	actionTypes.GET_CHARACTERS,
	async () => {
		return await api.getCharacters();
	},
);