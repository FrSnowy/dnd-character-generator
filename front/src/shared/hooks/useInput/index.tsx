import React from "react";
import Text from "shared/components/Text";
import * as Elements from './elements';
import debounce from 'debounce';

type InputProps = {
  name: string,
  type?: 'text' | 'email' | 'password',
  label?: string | JSX.Element,
}

const useInput = ({ name, type, label } : InputProps) => {
  const [value, setValue] = React.useState<string | null>(null);
  const [ref, setRef] = React.useState<HTMLElement | null>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setValue(v === '' ? null : v);
  }
  const debouncedHandler = debounce(changeHandler, 300);

  const view = React.useMemo(() => (
    <Elements.Label>
      {label && <Text size='small-text'>{label}</Text> }
      <Elements.Input
        name={name}
        type={type}
        ref={e => setRef(e)}
        onChange={debouncedHandler}
      />
    </Elements.Label>
  ), [name, type, label]);
  
  return { view, ref, value };
};

export default useInput;
