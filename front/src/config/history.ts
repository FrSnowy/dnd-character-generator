import { createBrowserHistory } from "history";
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';

export const browserHistory = createBrowserHistory();
export const RoutingStore = new RouterStore();

const history = syncHistoryWithStore(browserHistory, RoutingStore);

export default history;
