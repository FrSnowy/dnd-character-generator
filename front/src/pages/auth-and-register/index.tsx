import React from 'react';
import * as Elements from './elements';
import { Translate } from 'react-i18nify';
import { withHeader } from 'shared/hocs/withHeader';
import Text from 'shared/components/Text';
import useInput from 'shared/hooks/useInput';
import Button from 'shared/components/Button';
import history from 'config/history';

const AuthAndRegisterPage = () => {
  const isRegister = history.location.pathname === '/register';

  const emailInput = useInput({
    name: 'email',
    type: 'email',
    label: <Translate value='authAndRegisterLocale.email'/>,
  });

  const passwordInput = useInput({
    name: 'password',
    type: 'password',
    label: <Translate value='authAndRegisterLocale.password'/>,
  });

  return (
    <Elements.Container>
      <Text size='title' bold>
        <Translate value="authAndRegisterLocale.title" />
      </Text>
      <Elements.FormWrapped>
        {emailInput.view}
        {passwordInput.view}
        <Elements.FormFooter>
          <Elements.RegisterButtonContainer>
            <Button theme='accent'>
              <Translate value="authAndRegisterLocale.register" />
            </Button>
          </Elements.RegisterButtonContainer>
          <Elements.SignInButtonContainer>
            <Button type="submit" disabled={!emailInput.value || !passwordInput.value}>
              <Translate value="authAndRegisterLocale.signIn" />
            </Button>
          </Elements.SignInButtonContainer>
        </Elements.FormFooter>
      </Elements.FormWrapped>
    </Elements.Container>
  )
}

export default withHeader()(AuthAndRegisterPage);