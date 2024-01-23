"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

interface Props {
  fileNum: number;
  menu: string;
  link: string;
}

export default function Menu({ fileNum, menu, link }: Props) {
  const pathname = usePathname();
  return (
    <>
      <li
        className={`m-[15px] flex h-[60px] w-[220px] items-center pl-[10px] ${
          link === pathname ? "rounded bg-gray-100" : ""
        }`}
      >
        <Image
          src={`/main_icon0${fileNum}.svg`}
          alt={menu}
          width={20}
          height={20}
        />
        <Link href={link} className={`pl-[15px] font-thin`}>
          {menu}
        </Link>
      </li>
    </>
  );
}
