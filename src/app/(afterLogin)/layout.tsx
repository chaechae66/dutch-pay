import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import Menu from "./_components/Menu";

export default function AfterLoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = {
    id: 1,
    name: "임시",
    email: "test@gmail.com",
    image: null,
  };
  return (
    <>
      <div className="grid h-dvh grid-cols-[250px_auto] grid-rows-[70px_auto]">
        <header className="sticky top-0 col-start-1 col-end-3 grid h-[70px] w-auto grid-cols-[repeat(2,min-content)] items-center justify-between self-start border-b-[0.5px] border-solid border-gray-100 bg-white px-[10px]">
          <h2 className="select-none text-[32px]">
            <Link href={"/home"} className="text-indigo-700">
              DutchPay
            </Link>
          </h2>
          <div>
            <div className="h-[50px] w-[50px] rounded-full bg-gray-200">
              {user.image ? (
                <img src={user.image} />
              ) : (
                <div className="flex h-full items-center justify-center text-center text-xs text-white">
                  <Image
                    src={"/no_image.svg"}
                    alt="프로필 사진 없을 때"
                    width={20}
                    height={20}
                  />
                </div>
              )}
            </div>
          </div>
        </header>
        <nav className="h-[100%]">
          <ul>
            <Menu fileNum={1} menu="홈" link="/home" />
            <Menu fileNum={2} menu="모임원" link="/people" />
            <Menu fileNum={3} menu="번개등록" link="/add" />
            <Menu fileNum={4} menu="정산하기" link="/dutchpay" />
          </ul>
        </nav>
        <main className="h-full bg-indigo-50 p-14">{children}</main>
      </div>
    </>
  );
}
