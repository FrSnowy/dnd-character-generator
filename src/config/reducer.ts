import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import * as characterListDuck from "features/CharacterList/duck";
import history from "config/history";

const rootReducer = combineReducers({
  router: connectRouter(history),
  characterList: characterListDuck.reducer,
});

export default rootReducer;
