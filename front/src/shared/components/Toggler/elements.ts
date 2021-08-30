import styled, { css } from 'styled-components';
import { TogglerTheme } from './types';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const Container = styled.div<TogglerTheme>`
  position: relative;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 24px;
  height: 100%;
  min-height: 16px;
  border-radius: 16px;
  cursor: pointer;

  ${props => props.theme.theme == 'light' && css`
    background-color: rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(10, 30, 40, 0.8);  
  `};
`;

export const Indicator = styled.div<TogglerTheme & {
  position: 'left' | 'right'
}>`
  position: absolute;
  top: 2px;
  height: calc(100% - 4px);
  max-width: 16px;
  background-color: #fff;
  border-radius: 50%;
  transition: left 125ms ease-in-out, transform 125ms ease-in-out;

  ${props => props.theme.theme === 'light' && css`
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(10, 30, 40, 0.5);    
  `};

  ${props => props.position === 'left' && css`
    left: 2px;
  `};

  ${props => props.position === 'right' && css`
    transform: translateX(-100%);
    left: calc(100% - 2px);
  `};
`;

export const TextContainer = styled.div<TogglerTheme>`
  display: flex;
  flex: none;

  ${props => props.theme.theme === 'light' && css`
    color: #fff;
  `};

  &:first-of-type {
    margin-right: 8px;
  }

  &:last-of-type {
    margin-left: 8px;
  }

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;