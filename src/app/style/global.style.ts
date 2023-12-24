import { styled } from "styled-components";

interface BoxSize {
  width: string;
  height: string;
}

export const FlexBox = styled.div<BoxSize>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  align-items: center;
  justify-content: center;
`;
