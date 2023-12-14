import { FlexBox } from "@/style/global.style";
import { styled } from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 60px;
  background-color: #674bf2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Logo = styled.h1`
  & > a {
    color: #fff;
    font-size: 22px;
    font-weight: 500;
  }
`;

export const LoginBtn = styled.button`
  & > a {
    color: #fff;
  }
  background-color: #ffffff60;
  box-sizing: content-box;
  padding: 10px;
`;

export const Footer = styled(FlexBox)`
  background-color: #f9f9f9;
`;

export const Content = styled.section`
  min-height: calc(100vh - 120px);
`;
