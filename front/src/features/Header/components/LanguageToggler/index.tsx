import React from 'react';
import { inject, observer } from 'mobx-react';
import { Languages } from 'config/locale';
import { AppModelT } from 'models/AppModel/types';
import Toggler from 'shared/components/Toggler';
import * as Elements from './elements';

const LanguageToggler : React.FC<AppModelT> = ({ AppModel }) => (
  <Elements.LanguageToggler>
    <Toggler
      theme='light'
      valuesLocale = {{ left: 'Рус.', right: 'Eng.' }}
      values = {{ left: 'ru', right: 'en', current: AppModel!.lang }}
      onClick={v => AppModel!.changeLang(v as Languages)}
    />
  </Elements.LanguageToggler>
)

/**
 * Language toggler injected and wrapped with container for header
 */
export default inject('AppModel')(observer(LanguageToggler))