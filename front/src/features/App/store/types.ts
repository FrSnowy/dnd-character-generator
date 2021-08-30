import { Languages } from "config/locale";

export interface IAppStore {
  lang: Languages,
  changeLang: (lang: Languages) => void,
}

export type AppStoreProps = {
  AppStore?: IAppStore,
};