import { Languages, setCurrentLocale } from 'config/locale';
import { observable, action, makeObservable } from 'mobx';
import { IAppModel } from './types';

class AppModel implements IAppModel {
  @observable lang: Languages = 'en';

  constructor() {
    makeObservable(this);
  }

  @action('change language')
  changeLang(lang: Languages) {
    this.lang = lang;
    setCurrentLocale(lang);
  }
}

const AppModelInstance = new AppModel();
export default AppModelInstance;