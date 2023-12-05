"use client";

import { FlexBox } from "@/global.style";

export default function Home() {
  return (
    <FlexBox width="100%" height="100vh">
      <button>
        <a
          href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}`}
        >
          카카오톡 로그인
        </a>
      </button>
    </FlexBox>
  );
}
