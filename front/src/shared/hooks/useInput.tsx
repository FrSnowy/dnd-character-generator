import React from "react";
import debounce from 'debounce';
import Input, { InputProps } from "shared/components/Input";

type UseInputProps = Omit<InputProps, 'setRef' | 'onChange'>

const useInput = ({ name, type, label } : UseInputProps) => {
  const [value, setValue] = React.useState<string | null>(null);
  const [ref, setRef] = React.useState<HTMLElement | null>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setValue(v === '' ? null : v);
  }
  const debouncedHandler = debounce(changeHandler, 300);

  const view = React.useMemo(() => (
    <Input
      label={label}
      name={name}
      type={type}
      setRef={e => setRef(e)}
      onChange={debouncedHandler}
    />
  ), [name, type, label, debouncedHandler, setRef]);
  
  return { view, ref, value };
};

export default useInput;
