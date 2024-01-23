import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
export const authOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_REST_API_KEY ?? "",
      clientSecret: process.env.NEXT_PUBLIC_SECRET_KEY ?? "",
    }),
  ],
};
export default NextAuth(authOptions);
