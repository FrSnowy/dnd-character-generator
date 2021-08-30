import React from 'react';
import * as Elements from './elements';

export type ButtonProps = {
  disabled?: boolean,
  children: JSX.Element | string,
  layout?: 'auto' | 'full',
  theme?: 'accent' | 'error' | 'usual',
  type?: 'button' | 'submit' | 'reset',
}

const Button : React.FC<ButtonProps> = ({ disabled, theme = 'usual', layout='full', type='button', children }) => {
  return (
    <Elements.Button
      type={type}
      theme={theme}
      layout={layout}
      disabled={disabled}
    >
      {children}
    </Elements.Button>
  );
}

export default Button;