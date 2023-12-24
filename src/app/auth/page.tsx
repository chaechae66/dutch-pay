"use client";

import axios, { AxiosResponse } from "axios";
import { signInWithCustomToken } from "firebase/auth";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { authInit } from "../../service/firebase/init";

interface Token {
  token_type: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
}

interface CustomToken {
  custom_token: string;
}

export default function auth() {
  const search = useSearchParams();

  const code = search.get("code");

  const getToken = async (): Promise<Token> => {
    try {
      const { data } = await axios.post<Token, AxiosResponse<Token>>(
        "https://kauth.kakao.com/oauth/token",
        {
          grant_type: "authorization_code",
          client_id: `${process.env.NEXT_PUBLIC_REST_API_KEY}`,
          redirect_uri: `${process.env.NEXT_PUBLIC_REDIRECT_URI}`,
          code,
          client_secret: `${process.env.NEXT_PUBLIC_SECRET_KEY}`,
        },
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      );

      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to create token");
    }
  };

  const getcustomToken = async (_token: string) => {
    const { data } = await axios.get<CustomToken, AxiosResponse<CustomToken>>(
      `https://kakaocustomtokenauth-fdttotrakq-du.a.run.app?token=${_token}`
    );
    return data.custom_token;
  };

  useEffect(() => {
    console.time("성능 재기");
    getToken()
      .then((kakaoToken) => {
        return getcustomToken(kakaoToken["access_token"]);
      })
      .then((customToken) => {
        return signInWithCustomToken(authInit, customToken);
      })
      .then((userCredential) => {
        console.log(userCredential);
        console.timeEnd("성능 재기");
      })
      .catch((e) => {
        alert(e + "/n 불편을 드려 죄송합니다. 관리자에게 문의하세요");
      });
  }, []);
  return <></>;
}
