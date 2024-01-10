import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function BeforeLoginLayout({ children }: Props) {
  return (
    <>
      <header className="sticky top-0 grid h-[70px] w-auto grid-cols-[repeat(2,min-content)] items-center justify-between border-b-[0.5px] border-solid border-gray-200 bg-white px-[10px]">
        <h2 className="select-none text-[32px]">
          <Link href={"/"} className="text-indigo-700">
            DutchPay
          </Link>
        </h2>
        <Link
          href={"/login"}
          className="w-[65px] rounded-[5px] bg-zinc-100 p-[10px] text-base font-light text-black"
        >
          로그인
        </Link>
      </header>
      <section className="min-h-dvh">{children}</section>
    </>
  );
}
