import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
`;

export const FormWrapped = styled.form`
  width: 480px;
  margin-top: 16px;
  padding: 16px;

  label {
    display: flex;
    flex-direction: column;

    &:not(:first-of-type) {
      margin-top: 16px;
    }
  }

  input {
    margin-top: 4px;
    margin-bottom: 12px;
    width: 100%;
    font-size: 1em;
    line-height: 1.25;
    padding: 4px 8px;
  }
`;

export const FormFooter = styled.div`
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  margin-top: 16px;
`;

export const SignInButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 186px;
`;

export const RegisterButtonContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 236px;
`;