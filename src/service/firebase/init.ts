import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";

const app = initializeApp({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
});
export const functions = getFunctions(app);

export const authInit = getAuth(app);
