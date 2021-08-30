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