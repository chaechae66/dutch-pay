"use client";

import axios, { Axios, AxiosResponse } from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

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
    getToken().then((token) => {
      console.log(token);
    });
  }, []);
  return <></>;
}
