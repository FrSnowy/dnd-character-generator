import { Languages } from 'config/locale';
import { AppStoreProps } from 'features/App/store/types';
import { inject, observer } from 'mobx-react';
import React from 'react';
import Container from 'shared/components/Container';
import Toggler from 'shared/components/Toggler';
import * as Elements from './elements';
import { HeaderProps } from './types';

const Header : React.FC<AppStoreProps & HeaderProps> = ({ fixed, AppStore }) => (
  <Elements.Container fixed={fixed}>
    <Container direction="row">
      <Elements.InnerContainer>
        <Elements.Name>
          D&amp;D Character Generator
        </Elements.Name>
        <Elements.Articles>

        </Elements.Articles>
        <Elements.Controls>
          <Elements.LanguageToggler>
            <Toggler
              theme='light'
              valuesLocale = {{ left: 'Рус.', right: 'Eng.' }}
              values = {{ left: 'ru', right: 'en', current: AppStore!.lang }}
              onClick={v => AppStore!.changeLang(v as Languages)}
            />
          </Elements.LanguageToggler>
        </Elements.Controls>
      </Elements.InnerContainer>
    </Container>
  </Elements.Container>
)

export default inject('AppStore')(observer(Header))