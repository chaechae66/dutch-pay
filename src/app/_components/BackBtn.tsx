"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BackBtn() {
  const router = useRouter();

  return (
    <div
      className="h-5 w-5 cursor-pointer rounded bg-black"
      onClick={() => {
        router.back();
      }}
    >
      <Image src={"/backBtn.svg"} alt="뒤로가기버튼" width={20} height={20} />
    </div>
  );
}
