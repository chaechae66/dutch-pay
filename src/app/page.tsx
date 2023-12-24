"use client";

import {
  BannerWrap,
  CardsWrap,
  ImageWrap,
  TextWrap,
} from "@/app/style/page.style";
import Image from "next/image";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <BannerWrap>
        <ImageWrap>
          <Image
            src={"/bannerBG.jpg"}
            alt="모임배경사진"
            fill
            priority={false}
          />
        </ImageWrap>
        <TextWrap>
          <h3>
            복잡하게 모임 정산? <strong>DutchPay</strong>로 간편하게!
          </h3>
          <br />
          <br />
          <p>
            우리 모임, 1차는 카페에 2차, 3차 N차는 술 모임을 했다. 1차는 각계에
            N차는 돈 계산한 사람이 다르다. 심지어 아무개님이 기분 좋다고
            골든벨까지 쐈다. 누구는 술을 안마시고, 누구는 중도 하차를 하였다.
            방장인 나는 이런 것들까지 고려해서 정산을 해야 하는데 모임 정산
            복잡하다!
          </p>
          <br />
          <br />
          <br />
          <b>
            이럴 땐, <strong>DutchPay</strong>
          </b>
        </TextWrap>
      </BannerWrap>
      <CardsWrap>
        <div>
          <RiMoneyDollarCircleLine />
          <br />
          <h4>정산 쉽고 가볍게</h4>
          <p>
            우리 모임, 1차는 카페에 2차, 3차 N차는 술 모임을 했다. 1차는 각계에
            N차는 돈 계산한 사람이 다르다. 심지어 아무개님이 기분 좋다고
            골든벨까지 쐈다.
          </p>
        </div>
        <div>
          <RiMoneyDollarCircleLine />
          <br />
          <h4>우리 정산 공유하기</h4>
        </div>
        <div>
          <RiMoneyDollarCircleLine />
          <br />
          <h4>우리 모임 데이터 확인하기</h4>
        </div>
      </CardsWrap>
    </>
  );
}
