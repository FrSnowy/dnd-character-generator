import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as Elements from './elements';
import { TogglerProps } from './types';

const Toggler : React.FC<TogglerProps> = ({ theme, values, valuesLocale, onClick }) => {
  const value = values?.current || values?.left || null;
  const [indicatorRef, setIndicatorRef] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    if (!indicatorRef) return;
    indicatorRef.style.width = `${indicatorRef.getBoundingClientRect().height}px`;
  }, [indicatorRef]);

  const clickHandler = () => {
    onClick && onClick(
      value === values?.left ? values?.right || null : values?.left || null
    );
  }

  const valueClick = (v: string) => {
    if (v == value) return;
    onClick && onClick(v);
  }

  return (
    <ThemeProvider theme = {{ theme }}>
      <Elements.Wrapper>
        {valuesLocale?.left && (
          <Elements.TextContainer onClick={() => values?.left && valueClick(values?.left)}>
            {valuesLocale.left}
          </Elements.TextContainer>
        )}
        <Elements.Container onClick={() => clickHandler()}>
          <Elements.Indicator
            ref={el => setIndicatorRef(el)}
            position={value === values?.left ? 'left' : 'right'}
          />
        </Elements.Container>
        {valuesLocale?.right && (
          <Elements.TextContainer onClick={() => values?.right && valueClick(values?.right)}>
            {valuesLocale.right}
          </Elements.TextContainer>
        )}
      </Elements.Wrapper>
    </ThemeProvider>
  )
}

export default Toggler;