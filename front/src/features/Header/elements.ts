import styled, { css } from 'styled-components';
import { HeaderContainerProps } from './types';

export const Container = styled.div<HeaderContainerProps>`
  width: 100%;
  display: flex;
  position: ${({ fixed }) => fixed ? 'fixed' : undefined};
  top: 0;
  left: 0;
  background-color: #2E3846;
  color: #fff;
  padding: 8px;

  ${props => props.fixed && css`
    position: fixed;
  `};

  ${props => !props.fixed && css`
    margin-bottom: 1.5em;
  `};
`;

export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Name = styled.div`
  display: flex;
  width: 192px;
  margin-right: 16px;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 192px;
  margin-left: 16px;
`;

export const Articles = styled.div`
  width: calc(100% - 416px);
`;

export const LanguageToggler = styled.div`
  width: 100px;
  font-size: 12px;
`;