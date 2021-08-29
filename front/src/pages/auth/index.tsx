import React from 'react';
import { Translate } from 'react-i18nify';
import { withHeader } from 'shared/hocs/withHeader';

const AuthPage = () => {
  return (
    <Translate value="authLocale.title" />
  )
}

export default withHeader()(AuthPage);