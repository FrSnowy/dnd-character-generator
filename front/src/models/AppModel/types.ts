import { Languages } from "config/locale";

export interface IAppModel {
  lang: Languages,
  changeLang: (lang: Languages) => void,
}

export type AppModelT = {
  AppModel?: IAppModel,
};