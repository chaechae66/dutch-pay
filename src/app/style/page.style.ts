import { styled } from "styled-components";

export const BannerWrap = styled.div`
  width: 100%;
  height: 300px;
  margin: 50px 0;
  position: relative;
  display: flex;
  & > div {
    width: 50%;
    height: 100%;
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  margin-right: 60px;
`;

export const TextWrap = styled.div`
  color: #333;
  margin-top: 30px;
  & > h3 {
    font-size: 32px;
    font-weight: 400;
  }
  strong {
    color: #6038ff;
  }
  & > p {
    line-height: 24px;
  }
  & > b {
    font-size: 24px;
  }
`;

export const CardsWrap = styled.section`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 300px;
  svg {
    color: #6038ff;
    font-size: 72px;
  }
  & > div {
    padding: 30px 0;
    width: calc((100% / 3) - 60px);
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h4 {
    color: #6038ff;
    font-size: 18px;
    font-weight: 500;
  }
  p {
    padding: 0 50px;
    padding-top: 30px;
    line-height: 24px;
    color: #666;
  }
`;
