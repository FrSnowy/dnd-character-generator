import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as duck from 'features/CharacterList/duck';
import * as T from 'features/CharacterList/duck/types';
import { State, Dispatch } from 'config/store';

const mapStateToProps = (state: State): T.State => ({
	pending: state.characterList.pending,
  characters: state.characterList.characters,
});

const mapDispatchToProps = (dispatch: Dispatch): T.Actions => ({
	actions: bindActionCreators(duck.actions, dispatch),
});

const bindedConnect = (c: React.FC<T.Props>) =>
	connect(mapStateToProps, mapDispatchToProps)(c);

export default bindedConnect;