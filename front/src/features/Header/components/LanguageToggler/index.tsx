import React from 'react';
import { inject, observer } from 'mobx-react';
import { Languages } from 'config/locale';
import { AppStoreProps } from 'features/App/store/types';
import Toggler from 'shared/components/Toggler';
import * as Elements from './elements';

const LanguageToggler : React.FC<AppStoreProps> = ({ AppStore }) => (
  <Elements.LanguageToggler>
    <Toggler
      theme='light'
      valuesLocale = {{ left: 'Рус.', right: 'Eng.' }}
      values = {{ left: 'ru', right: 'en', current: AppStore!.lang }}
      onClick={v => AppStore!.changeLang(v as Languages)}
    />
  </Elements.LanguageToggler>
)

export default inject('AppStore')(observer(LanguageToggler))