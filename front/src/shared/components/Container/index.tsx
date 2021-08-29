import styled from "styled-components";

const Container = styled.div<{ direction: "row" | "column" }>`
  display: flex;
  width: 960px;
  margin: 0 auto;
  flex-direction: ${(props) => props.direction};
`;

export default Container;
