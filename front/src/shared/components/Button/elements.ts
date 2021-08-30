import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

type ButtonViewProps = Omit<ButtonProps, 'children' | 'type'>;

export const Button = styled.button<ButtonViewProps>`
  height: 100%;
  padding: 12px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 125ms ease-in-out;
  outline: none;
  border: 0;

  ${props => props.layout === 'full' && css`
    width: 100%;
  `}

  ${props => props.layout === 'auto' && css`
    width: auto;
    display: inline-block;
  `};

  ${props => props.theme === 'usual' && css`
    background-color: #0277bd;
    color: #fff;

    &:hover {
      background-color: #01579b;
    }
  `}

  ${props => props.theme === 'accent' && css`
    background-color: #8bc34a;
    color: #fff;

    &:hover {
      background-color: #689f38;
    }
  `};

  ${props => props.disabled && css`
    background-color: rgba(10, 30, 50, 0.15);
    color: rgba(10, 30, 50, 0.3);
    pointer-events: none;
  `};
`;