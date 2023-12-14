"use client";

import { functions } from "@/service/firebase/init";
import axios, { AxiosResponse } from "axios";
import { signInWithCustomToken } from "firebase/auth";
import { httpsCallable } from "firebase/functions";
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

export default function auth() {
  const search = useSearchParams();

  const kakaoCustomAuth = httpsCallable(functions, "kakaoCustomAuth");

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
          client_secret: "1UrIUbZ5RVTwPHlMQfZmvgWmV4PjLSmN",
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

  useEffect(() => {
    getToken()
      .then((kakaoToken) => {
        return kakaoCustomAuth(kakaoToken["access_token"]);
      })
      .then((data) => {
        return signInWithCustomToken(
          authInit,
          (data.data as { custom_token: string }).custom_token
        );
      })
      .then((userCredential) => {
        console.log(userCredential);
      });
  }, []);
  return <></>;
}
