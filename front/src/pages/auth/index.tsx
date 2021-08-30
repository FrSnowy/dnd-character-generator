import React from 'react';
import * as Elements from './elements';
import { t, Translate } from 'react-i18nify';
import { withHeader } from 'shared/hocs/withHeader';
import Text from 'shared/components/Text';
import useInput from 'shared/hooks/useInput';
import Button from 'shared/components/Button';

const AuthPage = () => {
  const emailInput = useInput({
    name: 'email',
    type: 'email',
    label: <Translate value='authLocale.email'/>,
  });

  const passwordInput = useInput({
    name: 'password',
    type: 'password',
    label: <Translate value='authLocale.password'/>,
  });

  return (
    <Elements.Container>
      <Text size='title' bold>
        <Translate value="authLocale.title" />
      </Text>
      <Elements.FormWrapped>
        {emailInput.view}
        {passwordInput.view}
        <Elements.FormFooter>
          <Elements.RegisterButtonContainer>
            <Button theme='accent'>
              <Translate value="authLocale.register" />
            </Button>
          </Elements.RegisterButtonContainer>
          <Elements.SignInButtonContainer>
            <Button type="submit" disabled={!emailInput.value || !passwordInput.value}>
              <Translate value="authLocale.signIn" />
            </Button>
          </Elements.SignInButtonContainer>
        </Elements.FormFooter>
      </Elements.FormWrapped>
    </Elements.Container>
  )
}

export default withHeader()(AuthPage);