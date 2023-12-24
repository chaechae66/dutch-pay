import { FlexBox } from "@/app/style/global.style";
import { styled } from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 60px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 0.5px solid #f1f1f1;
  position: sticky;
  z-index: 2;
  top: 0;
`;

export const Logo = styled.h1`
  & > a {
    color: #6038ff;
    font-size: 22px;
    font-weight: 500;
  }
`;

export const LoginBtn = styled.button`
  & > a {
    color: #333;
  }
  background-color: #ffe402;
  box-sizing: content-box;
  padding: 10px;
`;

export const Footer = styled(FlexBox)`
  margin-top: 100px;
  background-color: #f9f9f9;
`;

export const Content = styled.section`
  min-height: calc(100vh - 120px);
  padding: 0 50px;
`;
