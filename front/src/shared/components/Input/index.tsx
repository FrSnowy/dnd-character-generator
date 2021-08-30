import React from "react";
import Text from "shared/components/Text";
import * as Elements from './elements';

export type InputProps = {
  name: string,
  type?: 'text' | 'email' | 'password',
  label?: string | JSX.Element,
  setRef?: (e: HTMLInputElement) => void,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const Input: React.FC<InputProps> = ({ name, type, label, setRef, onChange }) => (
  <Elements.Label>
    {label && <Text size='small-text'>{label}</Text> }
    <Elements.Input
      name={name}
      type={type}
      ref={setRef}
      onChange={onChange}
    />
  </Elements.Label>
);

export default Input;
