import styled, { css } from "styled-components";

export type TextType = {
  color?: string;
  bold?: boolean;
  size: "title" | "text" | "small-text";
};

const Text = styled.span<TextType>`
  color: ${(props) => props.color || "rgba(9, 21, 38, 0.85)"};
  ${(props) =>
    !!props.bold &&
    css`
      font-weight: bold;
    `};

  ${(props) =>
    props.size === "title" &&
    css`
      font-size: 24px;
      line-height: 30px;
    `};

  ${(props) =>
    props.size === "text" &&
    css`
      font-size: 16px;
      line-height: 20px;
    `};

  ${(props) =>
    props.size === "small-text" &&
    css`
      font-size: 12px;
      line-height: 16px;
    `};
`;

export default Text;
