import { Languages, setCurrentLocale } from 'config/locale';
import { observable, action, makeObservable } from 'mobx';
import { IAppStore } from './types';

class AppStore implements IAppStore {
  @observable lang: Languages = 'ru';

  constructor() {
    makeObservable(this);
  }

  @action('change language')
  changeLang(lang: Languages) {
    this.lang = lang;
    setCurrentLocale(lang);
  }
}

const AppStoreInstance = new AppStore();
export default AppStoreInstance;