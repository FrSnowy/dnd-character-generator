import { Languages, setCurrentLocale } from 'config/locale';
import { observable, action, makeObservable } from 'mobx';

class RegistrationModel {
  @observable inProcess: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action('send registration request')
  async changeLang(lang: Languages) {
    this.inProcess = true;
    setCurrentLocale(lang);
  }
}

const RegistrationModelInstance = new RegistrationModel();
export default RegistrationModelInstance;